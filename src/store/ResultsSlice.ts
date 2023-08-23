import {StateCreator} from 'zustand'
import IconifyQueryResponse from '../types/IconifyQueryResponse'
import {PaginationSlice} from './PaginationSlice'

export interface ResultsSlice {
  searchTerm?: string
  queryResults?: IconifyQueryResponse
  setSearchTerm: (searchTerm: string) => void
  setQueryResults: (queryResults: IconifyQueryResponse) => void
}

export const createResultsSlice: StateCreator<
  ResultsSlice & PaginationSlice,
  [],
  [],
  ResultsSlice
> = (set) => ({
  setSearchTerm: (searchTerm: string) => set(() => ({searchTerm})),
  setQueryResults: (queryResults: IconifyQueryResponse) =>
    set(() => ({queryResults, currentPage: 0})),
})
