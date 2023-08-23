import {create} from 'zustand'
import {DialogSlice, createDialogSlice} from './DialogSlice'
import {FiltersSlice, createFiltersSlice} from './FiltersSlice'
import {PaginationSlice, createPaginationSlice} from './PaginationSlice'
import {ResultsSlice, createResultsSlice} from './ResultsSlice'
import {SanitySlice, createSanitySlice} from './SanitySlice'

// interface AppState {
//   limit: number
//   isFiltersOpen?: boolean
//   filterStyle: string
//   filterPalette: string
//   iconsPerPage: number
//   currentPage: number
//   toggleFilters: (force?: boolean) => void
//   setLimit: (limit: number) => void
//   setFilterStyle: (style: string) => void
//   setFilterPalette: (palette: string) => void
//   countFiltersApplied: () => number
//   setIconsPerPage: (iconsPerPage: number) => void
//   setPrevPage: () => void
//   setNextPage: () => void
//   searchTerm?: string
//   queryResults?: IconifyQueryResponse
//   setSearchTerm: (searchTerm: string) => void
//   setQueryResults: (queryResults: IconifyQueryResponse) => void

//   isDialogOpen?: boolean
//   openDialogOpen: () => void
//   closeDialogOpen: () => void
// }

// export const useAppStore = create<AppState>((set, get) => ({
//   limit: 999,
//   filterStyle: '',
//   filterPalette: '',
//   iconsPerPage: 40,
//   currentPage: 0,
//   toggleFilters: (force?: boolean) =>
//     set((s) => ({isFiltersOpen: force === undefined ? !s.isFiltersOpen : force})),
//   openDialogOpen: () => set(() => ({isDialogOpen: true})),
//   closeDialogOpen: () =>
//     set(() => ({
//       isDialogOpen: false,
//       searchTerm: undefined,
//       queryResults: undefined,
//       isFiltersOpen: false,
//       filterPalette: '',
//       filterStyle: '',
//       limit: 999,
//       currentPage: 0,
//     })),
//   setLimit: (limit: number) => set(() => ({limit})),
//   setFilterPalette: (filterPalette: string) => set(() => ({filterPalette})),
//   setFilterStyle: (filterStyle: string) => set(() => ({filterStyle})),
//   setSearchTerm: (searchTerm: string) => set(() => ({searchTerm})),
//   setQueryResults: (queryResults: IconifyQueryResponse) =>
//     set(() => ({queryResults, currentPage: 0})),
//   countFiltersApplied: () => {
//     let count = 0
//     if (get().filterStyle) count++
//     if (get().filterPalette) count++
//     if (get().limit !== 999) count++
//     return count
//   },
//   setIconsPerPage: (iconsPerPage: number) => set(() => ({iconsPerPage})),
//   setPrevPage: () => set(() => ({currentPage: get().currentPage - 1})),
//   setNextPage: () => set(() => ({currentPage: get().currentPage + 1})),
// }))

export const useAppStore = create<
  DialogSlice & FiltersSlice & PaginationSlice & ResultsSlice & SanitySlice
>()((...a) => ({
  ...createDialogSlice(...a),
  ...createFiltersSlice(...a),
  ...createPaginationSlice(...a),
  ...createResultsSlice(...a),
  ...createSanitySlice(...a),
}))
