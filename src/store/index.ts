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
  openDialogOpen: () => void
  closeDialogOpen: () => void
  toggleFilters: () => void
  setLimit: (limit: number) => void
  setFilterStyle: (style: string) => void
  setFilterPalette: (palette: string) => void
  setSearchTerm: (searchTerm: string) => void
  setQueryResults: (queryResults: IconifyQueryResponse) => void
  hasFiltersApplied: () => boolean
}

export const useAppStore = create<AppState>((set, get) => ({
  limit: 999,
  filterStyle: '',
  filterPalette: '',
  toggleFilters: () => set((s) => ({isFiltersOpen: !s.isFiltersOpen})),
  openDialogOpen: () => set(() => ({isDialogOpen: true})),
  closeDialogOpen: () =>
    set(() => ({
      isDialogOpen: false,
      searchTerm: undefined,
      queryResults: undefined,
      isFiltersOpen: false,
      filterPalette: '',
      filterStyle: '',
    })),
  setLimit: (limit: number) => set(() => ({limit})),
  setFilterPalette: (filterPalette: string) => set(() => ({filterPalette})),
  setFilterStyle: (filterStyle: string) => set(() => ({filterStyle})),
  setSearchTerm: (searchTerm: string) => set(() => ({searchTerm})),
  setQueryResults: (queryResults: IconifyQueryResponse) => set(() => ({queryResults})),
  hasFiltersApplied: () => !!get().filterStyle || !!get().filterPalette,
}))
