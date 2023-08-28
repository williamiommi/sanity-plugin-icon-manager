import {create} from 'zustand'
import {ConfigureSlice, createConfigureSlice} from './ConfigureSlice'
import {DialogSlice, createDialogSlice} from './DialogSlice'
import {FiltersSlice, createFiltersSlice} from './FiltersSlice'
import {PaginationSlice, createPaginationSlice} from './PaginationSlice'
import {ResultsSlice, createResultsSlice} from './ResultsSlice'
import {SanitySlice, createSanitySlice} from './SanitySlice'

export type AppStoreType = DialogSlice &
  FiltersSlice &
  PaginationSlice &
  ResultsSlice &
  SanitySlice &
  ConfigureSlice

export const useAppStore = create<AppStoreType>()((...a) => ({
  ...createDialogSlice(...a),
  ...createFiltersSlice(...a),
  ...createPaginationSlice(...a),
  ...createResultsSlice(...a),
  ...createSanitySlice(...a),
  ...createConfigureSlice(...a),
}))
