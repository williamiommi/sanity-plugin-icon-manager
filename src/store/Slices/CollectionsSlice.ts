import {StateCreator} from 'zustand'
import {groupAndSortCollections} from '../../lib/collectionsUtils'
import {toastError} from '../../lib/toastUtils'
import {IconifyInfoEnhanced} from '../../types/IconifyInfoEnhanced'
import {PluginOptionsSlice} from './PluginOptionsSlice'
import {SanitySlice} from './SanitySlice'

export interface CollectionsSlice {
  collections?: Record<string, IconifyInfoEnhanced>
  groupedCollections?: Record<string, IconifyInfoEnhanced[]>
  fetchCollections: () => void
}

export const createCollectionsSlice: StateCreator<
  CollectionsSlice & SanitySlice & PluginOptionsSlice,
  [],
  [],
  CollectionsSlice
> = (set, get) => ({
  fetchCollections: async () => {
    try {
      if (!get().collections) {
        const res = await fetch(`${get().iconifyEndpoint}/collections`)
        if (!res.ok) throw Error('Something went wrong', {cause: res.statusText})
        const collections = (await res.json()) as Record<string, IconifyInfoEnhanced>
        set(() => ({collections, groupedCollections: groupAndSortCollections(collections)}))
      }
    } catch (e: any) {
      toastError(get().sanityToast, e)
    }
  },
})
