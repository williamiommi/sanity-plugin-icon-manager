import {create} from 'zustand'
import IconifyQueryResponse from '../types/IconifyQueryResponse'

interface AppState {
  queryResults?: IconifyQueryResponse
  setQueryResults: (queryResults: IconifyQueryResponse) => void
}

export const useAppStore = create<AppState>((set) => ({
  setQueryResults: (queryResults: IconifyQueryResponse) => set(() => ({queryResults})),
}))
