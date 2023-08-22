import {create} from 'zustand'
import IconifyQueryResponse from '../types/IconifyQueryResponse'

interface AppState {
  isDialogOpen?: boolean
  searchTerm?: string
  limit: number
  queryResults?: IconifyQueryResponse
  isFiltersOpen?: boolean
  openDialogOpen: () => void
  closeDialogOpen: () => void
  toggleFilters: () => void
  setSearchTerm: (searchTerm: string) => void
  setQueryResults: (queryResults: IconifyQueryResponse) => void
}

export const useAppStore = create<AppState>((set) => ({
  limit: 999,
  toggleFilters: () => set((s) => ({isFiltersOpen: !s.isFiltersOpen})),
  openDialogOpen: () => set(() => ({isDialogOpen: true})),
  closeDialogOpen: () =>
    set(() => ({isDialogOpen: false, searchTerm: undefined, queryResults: undefined})),
  setSearchTerm: (searchTerm: string) => set(() => ({searchTerm})),
  setQueryResults: (queryResults: IconifyQueryResponse) => set(() => ({queryResults})),
}))
