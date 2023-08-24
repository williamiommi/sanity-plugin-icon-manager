import {ToastContextValue} from '@sanity/ui'
import {FormPatch, PatchEvent} from 'sanity'
import {StateCreator} from 'zustand'
import IconifyType from '../types/IconifyType'

type SanityPatchType = (patch: FormPatch | FormPatch[] | PatchEvent) => void

export interface SanitySlice {
  sanityValue?: IconifyType
  sanityToast?: ToastContextValue
  sanityPatch?: SanityPatchType
  setSanityValue: (sanityValue: IconifyType) => void
  setSanityToast: (sanityToast: ToastContextValue) => void
  setSanityPatch: (sanityPatch: SanityPatchType) => void
}

export const createSanitySlice: StateCreator<SanitySlice, [], [], SanitySlice> = (set) => ({
  setSanityValue: (sanityValue: IconifyType) => set((s) => ({sanityValue})),
  setSanityToast: (sanityToast: ToastContextValue) => set((s) => ({sanityToast})),
  setSanityPatch: (sanityPatch: SanityPatchType) => set((s) => ({sanityPatch})),
})
