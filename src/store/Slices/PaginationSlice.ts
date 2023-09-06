import {StateCreator} from 'zustand'

const DEFAULT_ICONS_PER_PAGE = 40

export interface PaginationSlice {
  iconsPerPage: number
  currentPage: number
  setIconsPerPage: (iconsPerPage: number) => void
  setPrevPage: () => void
  setNextPage: () => void
}

export const createPaginationSlice: StateCreator<PaginationSlice, [], [], PaginationSlice> = (
  set,
  get,
) => ({
  iconsPerPage: DEFAULT_ICONS_PER_PAGE,
  currentPage: 0,
  setIconsPerPage: (iconsPerPage: number) => set(() => ({iconsPerPage})),
  setPrevPage: () => set(() => ({currentPage: get().currentPage - 1})),
  setNextPage: () => set(() => ({currentPage: get().currentPage + 1})),
})
