import {FormEvent} from 'react'
import {RgbaColor} from 'react-colorful'
import {set as patchSet} from 'sanity'
import {StateCreator} from 'zustand'
import {AppStoreType} from '.'
import {hexToRgba, rgbaToHex} from '../lib/colorUtils'
import {copySvgDataUrl, copySvgHtml} from '../lib/copy2Clipboard'
import {Flip, getFlipValue} from '../lib/iconTransformation'
import {toastError, toastSuccess} from '../lib/toastUtils'
import {IconifyColor, IconifySize, IconifyType} from '../types/IconifyType'

export interface ConfigureSlice {
  flipH: boolean
  flipV: boolean
  rotate: number
  size: IconifySize
  uniqueSize: boolean
  previewBorder: boolean
  color?: IconifyColor
  getDownloadableUrl: () => string
  getHtmlIcon: (original?: boolean) => void
  getDataUrlIcon: (original?: boolean) => void
  hasBeenCustomized: () => boolean
  clearConfiguration: () => void
  resetConfiguration: () => void
  getFlipValue: () => Flip
  setToggle: (flipH: boolean, flipV: boolean) => void
  toggleFlipH: () => void
  toggleFlipV: () => void
  setRotate: (rotate: number) => void
  setRotate0: () => void
  setRotate90: () => void
  setRotate180: () => void
  setRotate270: () => void
  setWidth: (event: FormEvent<HTMLInputElement> | number) => void
  setHeight: (event: FormEvent<HTMLInputElement> | number) => void
  toggleUniqueSize: () => void
  togglePreviewBorder: () => void
  setColor: (color: RgbaColor | string) => void
  clearColor: () => void
  saveConfiguration: () => void
}

export const createConfigureSlice: StateCreator<AppStoreType, [], [], ConfigureSlice> = (
  set,
  get,
) => ({
  flipH: false,
  flipV: false,
  rotate: 0,
  size: {width: 0, height: 0},
  uniqueSize: false,
  previewBorder: false,
  getDownloadableUrl: () => {
    const SV = get().sanityValue
    if (!SV) return ''
    const searchParams = new URLSearchParams()
    searchParams.append('download', `1`)
    if (get().size.width) searchParams.append('width', `${get().size.width}`)
    if (get().size.height) searchParams.append('height', `${get().size.height}`)
    if (get().rotate > 0) searchParams.append('rotate', `${get().rotate}`)
    const flipValue = getFlipValue(get().flipH, get().flipV)
    if (flipValue) searchParams.append('flip', flipValue)
    if (get().color) searchParams.append('color', get().color?.hex!)
    return `https://api.iconify.design/${SV.icon}.svg?${searchParams.toString()}`
  },
  getHtmlIcon: (original?: boolean) => {
    const icon = get().sanityValue?.icon
    if (icon) {
      if (original === true) copySvgHtml(icon)
      else {
        copySvgHtml(
          icon,
          {
            width: get().size.width,
            height: get().size.height,
            rotate: get().rotate,
            hFlip: get().flipH,
            vFlip: get().flipV,
          },
          get().color?.hex,
        )
      }
    }
  },
  getDataUrlIcon: (original?: boolean) => {
    const icon = get().sanityValue?.icon
    if (icon) {
      if (original === true) copySvgDataUrl(icon)
      else {
        copySvgDataUrl(
          icon,
          {
            width: get().size.width,
            height: get().size.height,
            rotate: get().rotate,
            hFlip: get().flipH,
            vFlip: get().flipV,
          },
          get().color?.hex,
        )
      }
    }
  },
  hasBeenCustomized: () => {
    let count = 0
    const SV = get().sanityValue
    if (!SV) return false
    if (SV.metadata.flipH) count++
    if (SV.metadata.flipV) count++
    if (SV.metadata.rotate > 0) count++
    if (SV.metadata.size.width !== 16) count++
    if (SV.metadata.size.height !== 16) count++
    if (SV.metadata.color && SV.metadata.color.hex) count++
    return count > 0
  },
  clearConfiguration: () =>
    set(() => ({
      flipH: false,
      flipV: false,
      rotate: 0,
      size: {width: 16, height: 16},
      color: undefined,
      previewBorder: false,
      uniqueSize: false,
    })),
  resetConfiguration: () =>
    set(() => ({
      flipH: get().sanityValue?.metadata.flipH,
      flipV: get().sanityValue?.metadata.flipV,
      rotate: get().sanityValue?.metadata.rotate,
      size: get().sanityValue?.metadata.size,
      color: get().sanityValue?.metadata.color,
      previewBorder: false,
      uniqueSize: false,
    })),
  getFlipValue: () => getFlipValue(get().flipH, get().flipV),
  setToggle: (flipH, flipV) => set(() => ({flipH, flipV})),
  toggleFlipH: () => set((s) => ({flipH: !s.flipH})),
  toggleFlipV: () => set((s) => ({flipV: !s.flipV})),
  setRotate: (rotate: number) => set(() => ({rotate})),
  setRotate0: () => set(() => ({rotate: 0})),
  setRotate90: () => set((s) => ({rotate: s.rotate === 1 ? 0 : 1})),
  setRotate180: () => set((s) => ({rotate: s.rotate === 2 ? 0 : 2})),
  setRotate270: () => set((s) => ({rotate: s.rotate === 3 ? 0 : 3})),
  setWidth: (event: FormEvent<HTMLInputElement> | number) =>
    set((s) => {
      const width = typeof event === 'number' ? event : Number(event.currentTarget.value)
      const height = get().uniqueSize ? width : s.size.height
      return {size: {width, height}}
    }),
  setHeight: (event: FormEvent<HTMLInputElement> | number) =>
    set((s) => {
      const height = typeof event === 'number' ? event : Number(event.currentTarget.value)
      const width = get().uniqueSize ? height : s.size.width
      return {size: {width, height}}
    }),
  toggleUniqueSize: () => set((s) => ({uniqueSize: !s.uniqueSize})),
  togglePreviewBorder: () => set((s) => ({previewBorder: !s.previewBorder})),
  setColor: (color: RgbaColor | string) =>
    set(() => {
      let hex: string
      let rgba: RgbaColor
      if (typeof color === 'string') {
        hex = color
        rgba = hexToRgba(color)
      } else {
        rgba = color
        hex = rgbaToHex(color)
      }
      return {color: {hex, rgba}}
    }),
  clearColor: () => set((s) => ({color: undefined})),
  saveConfiguration: async () => {
    try {
      const sanityPatch = get().sanityPatch
      if (sanityPatch) {
        const sanityValue = get().sanityValue
        if (!sanityValue) throw Error('The stored value is broken')
        const objToSave: IconifyType = {
          ...sanityValue,
          metadata: {
            ...sanityValue.metadata,
            flipH: get().flipH,
            flipV: get().flipV,
            rotate: get().rotate,
            size: get().size,
            color: get().color,
          },
        }
        await sanityPatch(patchSet(objToSave))
        get().setSanityValue(objToSave)
        get().closeConfigDialog()
        toastSuccess('Configuration Saved')
      }
    } catch (e: unknown) {
      toastError(e)
    }
  },
})
