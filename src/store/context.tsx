import {ReactNode, createContext, useContext, useRef} from 'react'
import {StoreApi, createStore, useStore} from 'zustand'
import {CollectionsSlice, createCollectionsSlice} from './Slices/CollectionsSlice'
import {ConfigureSlice, createConfigureSlice} from './Slices/ConfigureSlice'
import {DialogSlice, createDialogSlice} from './Slices/DialogSlice'
import {FiltersSlice, createFiltersSlice} from './Slices/FiltersSlice'
import {IconSlice, createIconSlice} from './Slices/IconSlice'
import {PluginOptionsSlice, createPluginOptionsSlice} from './Slices/PluginOptionsSlice'
import {ResultsSlice, createResultsSlice} from './Slices/ResultsSlice'
import {SanitySlice, createSanitySlice} from './Slices/SanitySlice'

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
