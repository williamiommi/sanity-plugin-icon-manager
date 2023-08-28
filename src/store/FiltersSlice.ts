import {StateCreator} from 'zustand'
import {AppStoreType} from '.'

export const DEFAULT_FILTER_LIMIT = 999

export interface FiltersSlice {
  limit: number
  isFiltersOpen?: boolean
  filterStyle: string
  filterPalette: string
  countFiltersApplied: () => number
  toggleFilters: (force?: boolean) => void
  setLimit: (limit: number) => void
  setFilterStyle: (style: string) => void
  setFilterPalette: (palette: string) => void
}

export const createFiltersSlice: StateCreator<AppStoreType, [], [], FiltersSlice> = (set, get) => ({
  limit: DEFAULT_FILTER_LIMIT,
  filterStyle: '',
  filterPalette: '',
  countFiltersApplied: () => {
    let count = 0
    if (get().filterStyle) count++
    if (get().filterPalette) count++
    if (get().limit !== DEFAULT_FILTER_LIMIT) count++
    return count
  },
  toggleFilters: (force?: boolean) =>
    set((s) => ({isFiltersOpen: force === undefined ? !s.isFiltersOpen : force})),
  setLimit: (limit: number) => set(() => ({limit})),
  setFilterPalette: (filterPalette: string) => set(() => ({filterPalette})),
  setFilterStyle: (filterStyle: string) => set(() => ({filterStyle})),
})
