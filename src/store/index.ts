import {create} from 'zustand'
import IconifyQueryResponse from '../types/IconifyQueryResponse'

interface AppState {
  isDialogOpen?: boolean
  searchTerm?: string
  limit: number
  queryResults?: IconifyQueryResponse
  isFiltersOpen?: boolean
  filterStyle: string
  filterPalette: string
  iconsPerPage: number
  currentPage: number
  openDialogOpen: () => void
  closeDialogOpen: () => void
  toggleFilters: (force?: boolean) => void
  setLimit: (limit: number) => void
  setFilterStyle: (style: string) => void
  setFilterPalette: (palette: string) => void
  setSearchTerm: (searchTerm: string) => void
  setQueryResults: (queryResults: IconifyQueryResponse) => void
  countFiltersApplied: () => number
  setIconsPerPage: (iconsPerPage: number) => void
  setPrevPage: () => void
  setNextPage: () => void
}

export const useAppStore = create<AppState>((set, get) => ({
  limit: 999,
  filterStyle: '',
  filterPalette: '',
  iconsPerPage: 40,
  currentPage: 0,
  toggleFilters: (force?: boolean) =>
    set((s) => ({isFiltersOpen: force === undefined ? !s.isFiltersOpen : force})),
  openDialogOpen: () => set(() => ({isDialogOpen: true})),
  closeDialogOpen: () =>
    set(() => ({
      isDialogOpen: false,
      searchTerm: undefined,
      queryResults: undefined,
      isFiltersOpen: false,
      filterPalette: '',
      filterStyle: '',
      limit: 999,
      currentPage: 0,
    })),
  setLimit: (limit: number) => set(() => ({limit})),
  setFilterPalette: (filterPalette: string) => set(() => ({filterPalette})),
  setFilterStyle: (filterStyle: string) => set(() => ({filterStyle})),
  setSearchTerm: (searchTerm: string) => set(() => ({searchTerm})),
  setQueryResults: (queryResults: IconifyQueryResponse) =>
    set(() => ({queryResults, currentPage: 0})),
  countFiltersApplied: () => {
    let count = 0
    if (get().filterStyle) count++
    if (get().filterPalette) count++
    if (get().limit !== 999) count++
    return count
  },
  setIconsPerPage: (iconsPerPage: number) => set(() => ({iconsPerPage})),
  setPrevPage: () => set(() => ({currentPage: get().currentPage - 1})),
  setNextPage: () => set(() => ({currentPage: get().currentPage + 1})),
}))
