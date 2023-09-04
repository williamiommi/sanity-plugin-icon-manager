import {FormEvent} from 'react'
import {RgbaColor} from 'react-colorful'
import {set as patchSet, unset as patchUnset} from 'sanity'
import {StateCreator} from 'zustand'
import {AppStoreType} from '.'
import {hexToRgba, rgbaToHex} from '../lib/colorUtils'
import {Flip, getFlipValue} from '../lib/iconifyUtils'
import {toastError, toastSuccess, toastWarning} from '../lib/toastUtils'
import {IconifyColor, IconifySize, IconifyType} from '../types/IconifyType'

const initialState = {
  flipH: false,
  flipV: false,
  rotate: 0,
  inlineSvg: false,
  size: {width: 16, height: 16},
  uniqueSize: false,
  color: undefined,
  previewBorder: false,
}

export interface ConfigureSlice {
  flipH: boolean
  flipV: boolean
  rotate: number
  size: IconifySize
  uniqueSize: boolean
  previewBorder: boolean
  color?: IconifyColor
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
  ...initialState,
  hasBeenCustomized: () => {
    let count = 0
    const SV = get().sanityValue
    if (!SV || !SV.metadata) return false
    if (SV.metadata.flipH) count++
    if (SV.metadata.flipV) count++
    if (SV.metadata.rotate > 0) count++
    if (SV.metadata.size.width !== 16) count++
    if (SV.metadata.size.height !== 16) count++
    if (SV.metadata.color && SV.metadata.color.hex) count++
    return count > 0
  },
  clearConfiguration: () => set(initialState),
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

        const patches = []

        if (get().flipH !== sanityValue.metadata.flipH)
          patches.push(patchSet(get().flipH, ['metadata.flipH']))
        if (get().flipV !== sanityValue.metadata.flipV)
          patches.push(patchSet(get().flipV, ['metadata.flipV']))
        if (get().rotate !== sanityValue.metadata.rotate)
          patches.push(patchSet(get().rotate, ['metadata.rotate']))
        if (get().size.width !== sanityValue.metadata.size.width)
          patches.push(patchSet(get().size?.width, ['metadata.size.width']))
        if (get().size.height !== sanityValue.metadata.size.height)
          patches.push(patchSet(get().size?.height, ['metadata.size.height']))
        if (get().color) {
          if (get().color?.hex !== sanityValue.metadata.color?.hex)
            patches.push(patchSet(get().color?.hex, ['metadata.color.hex']))
          if (get().color?.rgba !== sanityValue.metadata.color?.rgba)
            patches.push(patchSet(get().color?.rgba, ['metadata.color.rgba']))
        } else if (get().color !== sanityValue.metadata.color) {
          patches.push(patchUnset(['metadata.color']))
        }

        if (patches.length > 0) {
          await sanityPatch(patches)
          get().setSanityValue(objToSave)
          get().closeConfigDialog()
          toastSuccess('Configuration Saved')
        } else {
          toastWarning({title: 'Nothing to update', description: `Configuration didn't change`})
        }
      }
    } catch (e: unknown) {
      toastError(e)
    }
  },
})
