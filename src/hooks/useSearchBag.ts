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
  const setSearchTerm = useAppStore((s) => s.setSearchTerm)
  const setQueryResults = useAppStore((s) => s.setQueryResults)

  const onChangeSearchTerm = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value)
  }

  const searchIcons = useCallback(async () => {
    if (!searchTerm) return
    const searchParams = new URLSearchParams()
    searchParams.append('query', searchTerm)
    searchParams.append('limit', limit.toString())
    const res = await fetch(`https://api.iconify.design/search?${searchParams.toString()}`)
    const data = (await res.json()) as IconifyQueryResponse
    setQueryResults(data)
  }, [searchTerm, limit, setQueryResults])

  return {onChangeSearchTerm, searchIcons}
}

export default useSearchBag
