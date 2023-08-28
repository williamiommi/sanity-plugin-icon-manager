import {FormEvent} from 'react'
import {RgbaColor} from 'react-colorful'
import {set as patchSet} from 'sanity'
import {StateCreator} from 'zustand'
import {AppStoreType} from '.'
import {hexToRgba, rgbaToHex} from '../lib/colorUtils'
import {toastError, toastSuccess} from '../lib/toastUtils'
import IconifyType, {IconifyColor, IconifySize} from '../types/IconifyType'

type Flip = 'horizontal' | 'vertical' | 'horizontal,vertical' | undefined

export const getFlipValue = (flipH?: boolean, flipV?: boolean): Flip => {
  let output: Flip
  if (flipH) output = 'horizontal'
  if (flipV) output = 'vertical'
  if (flipH && flipV) output = 'horizontal,vertical'
  return output
}

export interface ConfigureSlice {
  flipH: boolean
  flipV: boolean
  rotate: number
  size: IconifySize
  uniqueSize: boolean
  previewBorder: boolean
  color?: IconifyColor
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
  saveConfiguration: () => void
  setColor: (color: RgbaColor | string) => void
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
