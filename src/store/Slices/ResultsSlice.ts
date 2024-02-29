import {FormEvent} from 'react'
import {StateCreator} from 'zustand'
import {parseSearchResults} from '../../lib/iconifyUtils'
import {toastError} from '../../lib/toastUtils'
import IconManagerQueryResponse, {IconManagerIconInfo} from '../../types/IconManagerQueryResponse'
import {ConfigureSlice} from './ConfigureSlice'
import {DialogSlice} from './DialogSlice'
import {FiltersSlice} from './FiltersSlice'
import {PluginOptionsSlice} from './PluginOptionsSlice'
import {SanitySlice} from './SanitySlice'

const cacheResults = new Map<string, IconManagerIconInfo[]>()

export interface ResultsSlice {
  searchTerm?: string
  searchResults?: IconManagerIconInfo[]
  setSearchTerm: (event: FormEvent<HTMLInputElement>) => void
  setSearchResults: (searchResults?: IconManagerIconInfo[]) => void
  searchIcons: () => void
}

export const createResultsSlice: StateCreator<
  ResultsSlice & FiltersSlice & PluginOptionsSlice & SanitySlice & DialogSlice & ConfigureSlice,
  [],
  [],
  ResultsSlice
> = (set, get) => ({
  setSearchTerm: (event: FormEvent<HTMLInputElement>) =>
    set(() => ({searchTerm: event.currentTarget.value})),
  setSearchResults: (searchResults?: IconManagerIconInfo[]) => set(() => ({searchResults})),
  searchIcons: async () => {
    try {
      if (!get().searchTerm) return

      const searchParams = new URLSearchParams()
      const keywordStyle = get().filterStyle ? ` style=${get().filterStyle}` : ''
      const keywordPalette = get().filterPalette ? ` palette=${get().filterPalette}` : ''
      searchParams.append('query', `${get().searchTerm}${keywordStyle}${keywordPalette}`)
      searchParams.append('limit', get().limit.toString())

      if (get().filterCollection?.code) searchParams.set('prefix', get().filterCollection?.code!)
      else if (get().availableCollectionsOption)
        searchParams.set('prefixes', get().availableCollectionsOption!)

      let results
      let searchResults
      const searchParamsString = searchParams.toString()
      if (cacheResults.has(searchParamsString)) {
        searchResults = cacheResults.get(searchParamsString)!
      } else {
        cacheResults.delete(searchParamsString)
        const url = `${get().iconifyEndpoint}/search?${searchParams.toString()}`
        const res = await fetch(url)
        if (!res.ok)
          throw Error(
            `Status: ${res.status || 'unknown'} <br />
            ${res.statusText ? `${res.statusText}` : `Unable to search icons at '${url}'`}`,
          )
        results = (await res.json()) as IconManagerQueryResponse
        searchResults = parseSearchResults(results)
        cacheResults.set(searchParams.toString(), searchResults)
      }
      get().setSearchResults(searchResults)
      get().toggleFilters(false)
    } catch (e: unknown) {
      toastError(get().sanityToast, e)
    }
  },
})
