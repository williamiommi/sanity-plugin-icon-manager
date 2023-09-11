import {Flex, Text} from '@sanity/ui'
import {useAppStoreContext} from '../../store/context'
import {PaginationButton} from '../../style'

const SearchPagination = () => {
  const queryResults = useAppStoreContext((s) => s.queryResults)
  const currentPage = useAppStoreContext((s) => s.currentPage)
  const setPrevPage = useAppStoreContext((s) => s.setPrevPage)
  const setNextPage = useAppStoreContext((s) => s.setNextPage)

  if (!queryResults || queryResults.totalPages < 2) return null

  return (
    <Flex gap={2} align='center'>
      <PaginationButton type='button' onClick={setPrevPage} disabled={currentPage === 0}>
        ←
      </PaginationButton>
      <Text size={1}>
        {currentPage + 1} / {queryResults.totalPages}
      </Text>
      <PaginationButton
        type='button'
        onClick={setNextPage}
        disabled={currentPage === queryResults.totalPages - 1}
      >
        →
      </PaginationButton>
    </Flex>
  )
}

export default SearchPagination
