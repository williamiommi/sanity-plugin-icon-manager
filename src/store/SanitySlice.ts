import {ToastContextValue} from '@sanity/ui'
import {FormPatch, PatchEvent, Path} from 'sanity'
import {StateCreator} from 'zustand'
import {AppStoreType} from '.'
import {IconifyType} from '../types/IconifyType'

type SanityPatchType = (patch: FormPatch | FormPatch[] | PatchEvent) => void
type SanityPathFocusType = (path: Path) => void

export interface SanitySlice {
  sanityFieldPath?: Path
  sanityValue?: IconifyType
  sanityToast?: ToastContextValue
  sanityUserCanEdit?: boolean
  sanityPatch?: SanityPatchType
  sanityPathFocus?: SanityPathFocusType
  setSanityFieldPath: (sanityFieldPath: Path) => void
  setSanityValue: (sanityValue?: IconifyType) => void
  setSanityToast: (sanityToast: ToastContextValue) => void
  setSanityPatch: (sanityPatch: SanityPatchType) => void
  setSanityPathFocus: (sanityPathFocus: SanityPathFocusType) => void
  setSanityPresence: () => void
  setSanityUserCanEdit: (sanityUserCanEdit?: boolean) => void
}

export const createSanitySlice: StateCreator<AppStoreType, [], [], SanitySlice> = (set, get) => ({
  setSanityFieldPath: (sanityFieldPath: Path) => set(() => ({sanityFieldPath})),
  setSanityValue: (sanityValue?: IconifyType) => set(() => ({sanityValue})),
  setSanityToast: (sanityToast: ToastContextValue) => set(() => ({sanityToast})),
  setSanityPatch: (sanityPatch: SanityPatchType) => set(() => ({sanityPatch})),
  setSanityPathFocus: (sanityPathFocus: SanityPathFocusType) => set(() => ({sanityPathFocus})),
  setSanityPresence: () => {
    const sanityPathFocus = get().sanityPathFocus
    const sanityFieldPath = get().sanityFieldPath
    if (sanityPathFocus && sanityFieldPath) sanityPathFocus(sanityFieldPath)
  },
  setSanityUserCanEdit: (sanityUserCanEdit?: boolean) => set(() => ({sanityUserCanEdit})),
})
