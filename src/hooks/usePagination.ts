import {useEffect, useMemo, useState} from 'react'

interface usePaginationResponse<T> {
  itemsPerPage: number
  currentPage: number
  totalPages: number
  totalItems: number
  currentItems: T[]
  setNextPage: () => void
  setPrevPage: () => void
}

const usePagination = <T>(items?: T[], itemsPerPage = 40): usePaginationResponse<T> => {
  const [currentPage, setCurrentPage] = useState(0)

  const totalItems = useMemo(() => (items && items.length) || 0, [items])

  const totalPages = useMemo(() => {
    if (!items) return 0
    return items.length <= itemsPerPage ? 1 : Math.ceil(items.length / itemsPerPage)
  }, [items, itemsPerPage])

  const currentItems = useMemo(() => {
    if (!items) return []
    return items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
  }, [items, currentPage, itemsPerPage])

  const setNextPage = () => {
    setCurrentPage((prevState) => prevState + 1)
  }
  const setPrevPage = () => {
    setCurrentPage((prevState) => prevState - 1)
  }

  useEffect(() => {
    return () => {
      // reset to page 0
      setCurrentPage(0)
    }
  }, [items])

  return {currentPage, itemsPerPage, totalPages, totalItems, currentItems, setNextPage, setPrevPage}
}

export default usePagination
