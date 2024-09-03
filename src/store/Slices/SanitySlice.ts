import {ToastContextValue} from '@sanity/ui'
import {FormPatch, PatchEvent, Path} from 'sanity'
import {StateCreator} from 'zustand'

import {IconManagerType} from '../../types/IconManagerType'

type SanityPatchType = (patch: FormPatch | FormPatch[] | PatchEvent) => void
type SanityPathFocusType = (path: Path) => void

type UserCanType = {
  edit?: boolean
  configure?: boolean
}

export interface SanitySlice {
  sanityFieldPath?: Path
  sanityValue?: IconManagerType
  sanityToast?: ToastContextValue
  userCan: UserCanType
  sanityPatch?: SanityPatchType
  sanityPathFocus?: SanityPathFocusType
  setSanityFieldPath: (sanityFieldPath: Path) => void
  setSanityValue: (sanityValue?: IconManagerType) => void
  setSanityToast: (sanityToast: ToastContextValue) => void
  setSanityPatch: (sanityPatch: SanityPatchType) => void
  setSanityPathFocus: (sanityPathFocus: SanityPathFocusType) => void
  setSanityPresence: () => void
  setUserCan: (userCan: UserCanType) => void
}

export const createSanitySlice: StateCreator<SanitySlice, [], [], SanitySlice> = (set, get) => ({
  userCan: {edit: true, configure: true},
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
  setUserCan: (userCan: UserCanType) => set(() => ({userCan})),
})
