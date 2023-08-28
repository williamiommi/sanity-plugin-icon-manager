import {StateCreator} from 'zustand'
import {AppStoreType} from '.'
import {DEFAULT_FILTER_LIMIT} from './FiltersSlice'

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

export const createDialogSlice: StateCreator<AppStoreType, [], [], DialogSlice> = (set, get) => ({
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
    set(() => {
      get().resetConfiguration()
      return {
        isConfigDialogOpen: false,
      }
    }),

  openRemoveDialog: () => set(() => ({isRemoveDialogOpen: true})),
  closeRemoveDialog: () => set(() => ({isRemoveDialogOpen: false})),
})
