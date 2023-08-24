import {StateCreator} from 'zustand'
import IconifyQueryResponse from '../types/IconifyQueryResponse'

export interface ResultsSlice {
  searchTerm?: string
  queryResults?: IconifyQueryResponse
  setSearchTerm: (searchTerm: string) => void
  setQueryResults: (queryResults: IconifyQueryResponse) => void
}

export const createResultsSlice: StateCreator<ResultsSlice, [], [], ResultsSlice> = (set) => ({
  setSearchTerm: (searchTerm: string) => set(() => ({searchTerm})),
  setQueryResults: (queryResults: IconifyQueryResponse) =>
    set(() => ({queryResults, currentPage: 0})),
})
