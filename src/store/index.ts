import {create} from 'zustand'
import IconifyQueryResponse from '../types/IconifyQueryResponse'

interface AppState {
  isDialogOpen?: boolean
  searchTerm?: string
  queryResults?: IconifyQueryResponse
  openDialogOpen: () => void
  closeDialogOpen: () => void
  setSearchTerm: (searchTerm: string) => void
  setQueryResults: (queryResults: IconifyQueryResponse) => void
}

export const useAppStore = create<AppState>((set) => ({
  openDialogOpen: () => set(() => ({isDialogOpen: true})),
  closeDialogOpen: () =>
    set(() => ({isDialogOpen: false, searchTerm: undefined, queryResults: undefined})),
  setSearchTerm: (searchTerm: string) => set(() => ({searchTerm})),
  setQueryResults: (queryResults: IconifyQueryResponse) => set(() => ({queryResults})),
}))
