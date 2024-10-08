import {StateCreator} from 'zustand'

import {getIconsFromCollection, groupAndSortCollections} from '../../lib/collections-utils'
import {toastError} from '../../lib/toast-utils'
import {IconifyInfoEnhanced} from '../../types/IconifyInfoEnhanced'
import IconManagerCollectionResponse from '../../types/IconManagerCollectionResponse'
import {IconManagerIconInfo} from '../../types/IconManagerQueryResponse'
import {PluginOptionsSlice} from './PluginOptionsSlice'
import {SanitySlice} from './SanitySlice'

let cacheCollections: Record<string, IconifyInfoEnhanced>
let cacheGroupedCollections: Record<string, IconifyInfoEnhanced[]>

export interface CollectionsSlice {
  collections?: Record<string, IconifyInfoEnhanced>
  groupedCollections?: Record<string, IconifyInfoEnhanced[]>
  hasSelectedCollection?: boolean
  selectedCollection?: {icons: IconManagerIconInfo[]; collection: IconifyInfoEnhanced}
  fetchCollections: () => void
  searchCollection: (prefix: string) => void
  clearSelectedCollection: () => void
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
        const url = new URL(`${get().iconifyEndpoint}/collections`)
        if (get().availableCollectionsOption) {
          url.searchParams.set('prefixes', get().availableCollectionsOption!)
        }
        const res = await fetch(url)
        if (!res.ok)
          throw Error(
            `Status: ${res.status || 'unknown'} <br />
            ${res.statusText ? `${res.statusText}` : `Unable to fetch collections at '${url}'`}`,
          )
        const collections = (await res.json()) as Record<string, IconifyInfoEnhanced>
        cacheCollections = collections
        cacheGroupedCollections = groupAndSortCollections(collections)
        set(() => ({collections, groupedCollections: cacheGroupedCollections}))
      }
    } catch (e: unknown) {
      toastError(get().sanityToast, e)
    }
  },
  searchCollection: async (prefix: string) => {
    try {
      const url = `${get().iconifyEndpoint}/collection?prefix=${prefix}`
      const res = await fetch(url)
      if (!res.ok)
        throw Error(
          `Status: ${res.status || 'unknown'} <br />
              ${res.statusText ? `${res.statusText}` : `Unable to select collection at '${url}'`}`,
        )
      const collection = (await res.json()) as IconManagerCollectionResponse
      const collections = get().collections
      set(() => ({
        selectedCollection: {
          icons: getIconsFromCollection(collection),
          collection: {...collections![prefix], code: prefix},
        },
        hasSelectedCollection: true,
      }))
    } catch (e: unknown) {
      toastError(get().sanityToast, e)
    }
  },
  clearSelectedCollection: () =>
    set(() => ({hasSelectedCollection: false, selectedCollection: undefined})),
})
