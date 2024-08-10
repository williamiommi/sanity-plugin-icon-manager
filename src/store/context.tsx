import {createContext, ReactNode, useContext, useRef} from 'react'
import {createStore, StoreApi, useStore} from 'zustand'

import {CollectionsSlice, createCollectionsSlice} from './Slices/CollectionsSlice'
import {ConfigureSlice, createConfigureSlice} from './Slices/ConfigureSlice'
import {createDialogSlice, DialogSlice} from './Slices/DialogSlice'
import {createFiltersSlice, FiltersSlice} from './Slices/FiltersSlice'
import {createIconSlice, IconSlice} from './Slices/IconSlice'
import {createPluginOptionsSlice, PluginOptionsSlice} from './Slices/PluginOptionsSlice'
import {createResultsSlice, ResultsSlice} from './Slices/ResultsSlice'
import {createSanitySlice, SanitySlice} from './Slices/SanitySlice'

export type AppStoreType = SanitySlice &
  FiltersSlice &
  PluginOptionsSlice &
  DialogSlice &
  ResultsSlice &
  ConfigureSlice &
  CollectionsSlice &
  IconSlice

const createMyStore = () =>
  createStore<AppStoreType>((...a) => ({
    ...createSanitySlice(...a),
    ...createFiltersSlice(...a),
    ...createPluginOptionsSlice(...a),
    ...createDialogSlice(...a),
    ...createResultsSlice(...a),
    ...createConfigureSlice(...a),
    ...createCollectionsSlice(...a),
    ...createIconSlice(...a),
  }))

const AppStoreContext = createContext<StoreApi<AppStoreType> | null>(null)

export function AppStoreContextProvider({children}: {children: ReactNode}) {
  const storeRef = useRef<StoreApi<AppStoreType>>()
  if (!storeRef.current) {
    storeRef.current = createMyStore()
  }
  return <AppStoreContext.Provider value={storeRef.current}>{children}</AppStoreContext.Provider>
}

export function useAppStoreContext<T>(selector: (state: AppStoreType) => T) {
  const store = useContext(AppStoreContext)
  if (store === null) {
    throw new Error('Missing Wrapper in the tree')
  }
  const value = useStore(store, selector)
  return value
}
