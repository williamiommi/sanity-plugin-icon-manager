import {useToast} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {set, unset} from 'sanity'
import {useAppStore} from '../store'
import IconifyQueryResponse from '../types/IconifyQueryResponse'
import IconifyType from '../types/IconifyType'

interface useSearchBagResponse {
  onChangeSearchTerm: (event: FormEvent<HTMLInputElement>) => void
  searchIcons: () => Promise<void>
  selectIcon: (event: FormEvent<HTMLButtonElement>) => void
  clearIcon: () => void
}

const cacheResults = new Map<string, IconifyQueryResponse>()

const useSearchBag = (): useSearchBagResponse => {
  const searchTerm = useAppStore((s) => s.searchTerm)
  const limit = useAppStore((s) => s.limit)
  const filterStyle = useAppStore((s) => s.filterStyle)
  const filterPalette = useAppStore((s) => s.filterPalette)
  const setSearchTerm = useAppStore((s) => s.setSearchTerm)
  const queryResults = useAppStore((s) => s.queryResults)
  const setQueryResults = useAppStore((s) => s.setQueryResults)
  const toggleFilters = useAppStore((s) => s.toggleFilters)
  const iconsPerPage = useAppStore((s) => s.iconsPerPage)
  const sanityPatch = useAppStore((s) => s.sanityPatch)
  const closeDialogOpen = useAppStore((s) => s.closeDialogOpen)
  const toast = useToast()

  const onChangeSearchTerm = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value)
  }

  const searchIcons = useCallback(async () => {
    if (!searchTerm) return
    const searchParams = new URLSearchParams()
    const keywordStyle = filterStyle ? ` style=${filterStyle}` : ''
    const keywordPalette = filterPalette ? ` palette=${filterPalette}` : ''
    searchParams.append('query', `${searchTerm}${keywordStyle}${keywordPalette}`)
    searchParams.append('limit', limit.toString())

    // check cache
    let results
    const searchParamsString = searchParams.toString()
    if (cacheResults.has(searchParamsString)) {
      results = cacheResults.get(searchParamsString)!
    } else {
      cacheResults.delete(searchParamsString)
      const res = await fetch(`https://api.iconify.design/search?${searchParams.toString()}`)
      results = (await res.json()) as IconifyQueryResponse
      results.totalPages = results.total ? Math.ceil(results.total / iconsPerPage) : 1
      cacheResults.set(searchParams.toString(), results)
    }
    setQueryResults(results)
    toggleFilters(false)
  }, [searchTerm, limit, filterStyle, filterPalette, setQueryResults, toggleFilters, iconsPerPage])

  const selectIcon = useCallback(
    async (event: FormEvent<HTMLButtonElement>) => {
      try {
        const value = event?.currentTarget.dataset.value
        const iconInfo = value?.split(':')
        if (iconInfo?.length === 2) {
          const collection = queryResults?.collections[iconInfo[0]]
          const objToSave: IconifyType = {
            collection: iconInfo[0],
            icon: iconInfo[1],
            fullName: value!,
            metadata: {
              author: {
                name: collection?.author.name,
                url: collection?.author.url,
              },
              license: {
                name: collection?.license.title,
                url: collection?.license.url,
              },
            },
          }
          if (sanityPatch) {
            await sanityPatch(set(objToSave))
            closeDialogOpen()
          }
        }
      } catch (e: any) {
        console.error(e)
        toast.push({status: 'error', title: 'Something went wrong', description: e.message})
      }
    },
    [queryResults, sanityPatch, toast, closeDialogOpen],
  )

  const clearIcon = useCallback(() => {
    try {
      if (sanityPatch) sanityPatch(unset())
    } catch (e: any) {
      console.error(e)
      toast.push({status: 'error', title: 'Something went wrong'})
    }
  }, [sanityPatch, toast])

  return {
    onChangeSearchTerm,
    searchIcons,
    selectIcon,
    clearIcon,
  }
}

export default useSearchBag
