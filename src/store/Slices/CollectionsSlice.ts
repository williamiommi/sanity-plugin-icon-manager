import {StateCreator} from 'zustand'
import {groupAndSortCollections} from '../../lib/collectionsUtils'
import {toastError} from '../../lib/toastUtils'
import {IconifyInfoEnhanced} from '../../types/IconifyInfoEnhanced'
import {PluginOptionsSlice} from './PluginOptionsSlice'
import {SanitySlice} from './SanitySlice'

let cacheCollections: Record<string, IconifyInfoEnhanced>
let cacheGroupedCollections: Record<string, IconifyInfoEnhanced[]>

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
      if (cacheCollections && cacheGroupedCollections) {
        set(() => ({collections: cacheCollections, groupedCollections: cacheGroupedCollections}))
      } else {
        const res = await fetch(`${get().iconifyEndpoint}/collections`)
        if (!res.ok) throw Error('Something went wrong', {cause: res.statusText})
        const collections = (await res.json()) as Record<string, IconifyInfoEnhanced>
        cacheCollections = collections
        cacheGroupedCollections = groupAndSortCollections(collections)
        set(() => ({collections, groupedCollections: cacheGroupedCollections}))
      }
    } catch (e: any) {
      toastError(get().sanityToast, e)
    }
  },
})
