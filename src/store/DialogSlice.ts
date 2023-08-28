import {StateCreator} from 'zustand'
import {DEFAULT_FILTER_LIMIT} from './FiltersSlice'
import {SanitySlice} from './SanitySlice'

export interface DialogSlice {
  isSearchDialogOpen?: boolean
  openSearchDialog: () => void
  closeSearchDialog: () => void

  isInfoDialogOpen?: boolean
  openInfoDialog: () => void
  closeInfoDialog: () => void

  isConfigDialogOpen?: boolean
  openConfigDialog: () => void
  closeConfigDialog: () => void

  isRemoveDialogOpen?: boolean
  openRemoveDialog: () => void
  closeRemoveDialog: () => void
}

export const createDialogSlice: StateCreator<DialogSlice & SanitySlice, [], [], DialogSlice> = (
  set,
  get,
) => ({
  openSearchDialog: () => set(() => ({isSearchDialogOpen: true})),
  closeSearchDialog: () =>
    set(() => ({
      isSearchDialogOpen: false,
      searchTerm: undefined,
      queryResults: undefined,
      isFiltersOpen: false,
      filterPalette: '',
      filterStyle: '',
      limit: DEFAULT_FILTER_LIMIT,
      currentPage: 0,
    })),

  openInfoDialog: () => set(() => ({isInfoDialogOpen: true})),
  closeInfoDialog: () => set(() => ({isInfoDialogOpen: false})),

  openConfigDialog: () => set(() => ({isConfigDialogOpen: true})),
  closeConfigDialog: () =>
    set((s) => {
      return {
        isConfigDialogOpen: false,
        flipH: get().sanityValue?.metadata.flipH,
        flipV: get().sanityValue?.metadata.flipV,
        rotate: get().sanityValue?.metadata.rotate,
        size: get().sanityValue?.metadata.size,
        previewBorder: false,
        uniqueSize: false,
        color: get().sanityValue?.metadata.color,
      }
    }),

  openRemoveDialog: () => set(() => ({isRemoveDialogOpen: true})),
  closeRemoveDialog: () => set(() => ({isRemoveDialogOpen: false})),
})
