import {FormEvent, useCallback} from 'react'
import {useAppStore} from '../store'
import IconifyQueryResponse from '../types/IconifyQueryResponse'

interface useSearchBagResponse {
  onChangeSearchTerm: (event: FormEvent<HTMLInputElement>) => void
  searchIcons: () => Promise<void>
}

const useSearchBag = (): useSearchBagResponse => {
  const searchTerm = useAppStore((s) => s.searchTerm)
  const limit = useAppStore((s) => s.limit)
  const filterStyle = useAppStore((s) => s.filterStyle)
  const filterPalette = useAppStore((s) => s.filterPalette)
  const setSearchTerm = useAppStore((s) => s.setSearchTerm)
  const setQueryResults = useAppStore((s) => s.setQueryResults)
  const toggleFilters = useAppStore((s) => s.toggleFilters)
  const iconsPerPage = useAppStore((s) => s.iconsPerPage)

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
    const res = await fetch(`https://api.iconify.design/search?${searchParams.toString()}`)
    const data = (await res.json()) as IconifyQueryResponse

    const totalPages = data.total ? Math.ceil(data.total / iconsPerPage) : 1

    const chunks = []
    for (let index = 0; index < totalPages; index++) {
      chunks.push(data.icons.slice(index * iconsPerPage, (index + 1) * iconsPerPage))
    }
    data.chunks = chunks

    setQueryResults(data)
    toggleFilters(false)
  }, [searchTerm, limit, filterStyle, filterPalette, setQueryResults, toggleFilters, iconsPerPage])

  return {
    onChangeSearchTerm,
    searchIcons,
  }
}

export default useSearchBag
