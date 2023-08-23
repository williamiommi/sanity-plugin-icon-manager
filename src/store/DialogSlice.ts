import {StateCreator} from 'zustand'
import {DEFAULT_FILTER_LIMIT, FiltersSlice} from './FiltersSlice'
import {PaginationSlice} from './PaginationSlice'
import {ResultsSlice} from './ResultsSlice'

export interface DialogSlice {
  isDialogOpen?: boolean
  openDialogOpen: () => void
  closeDialogOpen: () => void
}

export const createDialogSlice: StateCreator<
  DialogSlice & FiltersSlice & PaginationSlice & ResultsSlice,
  [],
  [],
  DialogSlice
> = (set) => ({
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
