import {StateCreator} from 'zustand'
import {ConfigureSlice} from './ConfigureSlice'
import {DEFAULT_FILTER_LIMIT} from './FiltersSlice'
import {SanitySlice} from './SanitySlice'

export interface DialogSlice {
  isSearchDialogOpen?: boolean
  openSearchDialog: () => void
  closeSearchDialog: () => void

  isInfoDialogOpen?: boolean
  openInfoDialog: () => void
  closeInfoDialog: () => void

  isConfigDialogOpen?: boolean
  openConfigDialog: () => void
  closeConfigDialog: () => void

  isRemoveDialogOpen?: boolean
  openRemoveDialog: () => void
  closeRemoveDialog: () => void
}

export const createDialogSlice: StateCreator<
  DialogSlice & SanitySlice & ConfigureSlice,
  [],
  [],
  DialogSlice
> = (set, get) => ({
  openSearchDialog: () => {
    get().setSanityPresence()
    set(() => ({isSearchDialogOpen: true}))
  },
  closeSearchDialog: () =>
    set(() => ({
      isSearchDialogOpen: false,
      searchTerm: undefined,
      queryResults: undefined,
      isFiltersOpen: false,
      filterPalette: '',
      filterStyle: '',
      limit: DEFAULT_FILTER_LIMIT,
      currentPage: 0,
    })),

  openInfoDialog: () => set(() => ({isInfoDialogOpen: true})),
  closeInfoDialog: () => set(() => ({isInfoDialogOpen: false})),

  openConfigDialog: () => {
    get().setSanityPresence()
    set(() => ({isConfigDialogOpen: true}))
  },
  closeConfigDialog: () => {
    get().resetConfiguration()
    set(() => ({isConfigDialogOpen: false}))
  },

  openRemoveDialog: () => set(() => ({isRemoveDialogOpen: true})),
  closeRemoveDialog: () => set(() => ({isRemoveDialogOpen: false})),
})
