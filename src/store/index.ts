import {create} from 'zustand'
import {DialogSlice, createDialogSlice} from './DialogSlice'
import {FiltersSlice, createFiltersSlice} from './FiltersSlice'
import {PaginationSlice, createPaginationSlice} from './PaginationSlice'
import {ResultsSlice, createResultsSlice} from './ResultsSlice'
import {SanitySlice, createSanitySlice} from './SanitySlice'

export const useAppStore = create<
  DialogSlice & FiltersSlice & PaginationSlice & ResultsSlice & SanitySlice
>()((...a) => ({
  ...createDialogSlice(...a),
  ...createFiltersSlice(...a),
  ...createPaginationSlice(...a),
  ...createResultsSlice(...a),
  ...createSanitySlice(...a),
}))
