import {ToastContextValue} from '@sanity/ui'
import {FormPatch, PatchEvent} from 'sanity'
import {StateCreator} from 'zustand'
import {AppStoreType} from '.'
import IconifyType from '../types/IconifyType'

type SanityPatchType = (patch: FormPatch | FormPatch[] | PatchEvent) => void

export interface SanitySlice {
  sanityValue?: IconifyType
  sanityToast?: ToastContextValue
  sanityPatch?: SanityPatchType
  setSanityValue: (sanityValue?: IconifyType) => void
  setSanityToast: (sanityToast: ToastContextValue) => void
  setSanityPatch: (sanityPatch: SanityPatchType) => void
}

export const createSanitySlice: StateCreator<AppStoreType, [], [], SanitySlice> = (set) => ({
  setSanityValue: (sanityValue?: IconifyType) => set(() => ({sanityValue})),
  setSanityToast: (sanityToast: ToastContextValue) => set(() => ({sanityToast})),
  setSanityPatch: (sanityPatch: SanityPatchType) => set(() => ({sanityPatch})),
})
