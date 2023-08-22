import {create} from 'zustand'
import IconifyQueryResponse from '../types/IconifyQueryResponse'

interface AppState {
  isDialogOpen?: boolean
  searchTerm?: string
  limit: number
  queryResults?: IconifyQueryResponse
  isFiltersOpen?: boolean
  filterStyle: string
  filterPalette: boolean
  openDialogOpen: () => void
  closeDialogOpen: () => void
  toggleFilters: () => void
  setFilterStyle: (style: string) => void
  toggleFilterPalette: () => void
  setSearchTerm: (searchTerm: string) => void
  setQueryResults: (queryResults: IconifyQueryResponse) => void
}

export const useAppStore = create<AppState>((set) => ({
  limit: 999,
  filterStyle: '',
  filterPalette: false,
  toggleFilters: () => set((s) => ({isFiltersOpen: !s.isFiltersOpen})),
  toggleFilterPalette: () => set((s) => ({filterPalette: !s.filterPalette})),
  openDialogOpen: () => set(() => ({isDialogOpen: true})),
  closeDialogOpen: () =>
    set(() => ({isDialogOpen: false, searchTerm: undefined, queryResults: undefined})),
  setFilterStyle: (filterStyle: string) => set(() => ({filterStyle})),
  setSearchTerm: (searchTerm: string) => set(() => ({searchTerm})),
  setQueryResults: (queryResults: IconifyQueryResponse) => set(() => ({queryResults})),
}))
