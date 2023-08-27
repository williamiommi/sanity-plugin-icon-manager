import {FormEvent} from 'react'
import {StateCreator} from 'zustand'
import {IconifyColor, IconifySize} from '../types/IconifyType'

type Flip = 'horizontal' | 'vertical' | 'horizontal,vertical' | undefined

export interface ConfigureSlice {
  flipH: boolean
  flipV: boolean
  rotate: number
  size: IconifySize
  uniqueSize: boolean
  previewBorder: boolean
  color?: IconifyColor
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
}

export const createConfigureSlice: StateCreator<ConfigureSlice, [], [], ConfigureSlice> = (
  set,
  get,
) => ({
  flipH: false,
  flipV: false,
  rotate: 0,
  size: {width: 0, height: 0},
  uniqueSize: false,
  previewBorder: false,
  getFlipValue: () => {
    let output: Flip
    if (get().flipH) output = 'horizontal'
    if (get().flipV) output = 'vertical'
    if (get().flipH && get().flipV) output = 'horizontal,vertical'
    return output
  },
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
})
