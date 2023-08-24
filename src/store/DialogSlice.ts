import {StateCreator} from 'zustand'
import {DEFAULT_FILTER_LIMIT} from './FiltersSlice'

export interface DialogSlice {
  isDialogOpen?: boolean
  openDialogOpen: () => void
  closeDialogOpen: () => void
}

export const createDialogSlice: StateCreator<DialogSlice, [], [], DialogSlice> = (set) => ({
  openDialogOpen: () => set(() => ({isDialogOpen: true})),
  closeDialogOpen: () =>
    set(() => ({
      isDialogOpen: false,
      searchTerm: undefined,
      queryResults: undefined,
      isFiltersOpen: false,
      filterPalette: '',
      filterStyle: '',
      limit: DEFAULT_FILTER_LIMIT,
      currentPage: 0,
    })),
})
