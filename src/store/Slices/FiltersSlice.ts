import {StateCreator} from 'zustand'

export const DEFAULT_FILTER_LIMIT = 999

export interface FiltersSlice {
  limit: number
  isFiltersOpen?: boolean
  filterStyle: string
  filterPalette: string
  filterCollection?: {code: string; name: string}
  countFiltersApplied: () => number
  toggleFilters: (force?: boolean) => void
  setLimit: (limit: number) => void
  setFilterStyle: (filterStyle: string) => void
  setFilterPalette: (filterPalette: string) => void
  setFilterCollection: (code: string, name: string) => void
}

export const createFiltersSlice: StateCreator<FiltersSlice, [], [], FiltersSlice> = (set, get) => ({
  limit: DEFAULT_FILTER_LIMIT,
  filterStyle: '',
  filterPalette: '',
  countFiltersApplied: () => {
    let count = 0
    if (get().filterStyle) count++
    if (get().filterPalette) count++
    if (get().filterCollection) count++
    if (get().limit !== DEFAULT_FILTER_LIMIT) count++
    return count
  },
  toggleFilters: (force?: boolean) =>
    set((s) => ({isFiltersOpen: force === undefined ? !s.isFiltersOpen : force})),
  setLimit: (limit: number) => set(() => ({limit})),
  setFilterStyle: (filterStyle: string) => set(() => ({filterStyle})),
  setFilterPalette: (filterPalette: string) => set(() => ({filterPalette})),
  setFilterCollection: (code: string, name: string) => {
    const newCollection = code ? {code, name} : undefined
    set(() => ({filterCollection: newCollection}))
  },
})
