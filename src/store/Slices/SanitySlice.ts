import {ToastContextValue} from '@sanity/ui'
import {FormPatch, PatchEvent, Path} from 'sanity'
import {StateCreator} from 'zustand'

import {IconManagerType} from '../../types/IconManagerType'

type SanityPatchType = (patch: FormPatch | FormPatch[] | PatchEvent) => void
type SanityPathFocusType = (path: Path) => void

export interface SanitySlice {
  sanityFieldPath?: Path
  sanityValue?: IconManagerType
  sanityToast?: ToastContextValue
  sanityUserCanEdit?: boolean
  userCanConfigure?: boolean
  sanityPatch?: SanityPatchType
  sanityPathFocus?: SanityPathFocusType
  setSanityFieldPath: (sanityFieldPath: Path) => void
  setSanityValue: (sanityValue?: IconManagerType) => void
  setSanityToast: (sanityToast: ToastContextValue) => void
  setSanityPatch: (sanityPatch: SanityPatchType) => void
  setSanityPathFocus: (sanityPathFocus: SanityPathFocusType) => void
  setSanityPresence: () => void
  setSanityUserCanEdit: (sanityUserCanEdit?: boolean) => void
  setUserCanConfigure: (userCanConfigure?: boolean) => void
}

export const createSanitySlice: StateCreator<SanitySlice, [], [], SanitySlice> = (set, get) => ({
  setSanityFieldPath: (sanityFieldPath: Path) => set(() => ({sanityFieldPath})),
  setSanityValue: (sanityValue?: IconManagerType) => set(() => ({sanityValue})),
  setSanityToast: (sanityToast: ToastContextValue) => set(() => ({sanityToast})),
  setSanityPatch: (sanityPatch: SanityPatchType) => set(() => ({sanityPatch})),
  setSanityPathFocus: (sanityPathFocus: SanityPathFocusType) => set(() => ({sanityPathFocus})),
  setSanityPresence: () => {
    const sanityPathFocus = get().sanityPathFocus
    const sanityFieldPath = get().sanityFieldPath
    if (sanityPathFocus && sanityFieldPath) sanityPathFocus(sanityFieldPath)
  },
  setSanityUserCanEdit: (sanityUserCanEdit?: boolean) => set(() => ({sanityUserCanEdit})),
  setUserCanConfigure: (userCanConfigure?: boolean) => set(() => ({userCanConfigure})),
})
