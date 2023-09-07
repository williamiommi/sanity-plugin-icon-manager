import {Flex, Text} from '@sanity/ui'
import {useAppStoreContext} from '../../store/context'
import {StyledPaginationButton} from '../shared/SharedStyledComponents'

interface SearchPaginationProps {}

const SearchPagination = (props: SearchPaginationProps) => {
  const queryResults = useAppStoreContext((s) => s.queryResults)
  const currentPage = useAppStoreContext((s) => s.currentPage)
  const setPrevPage = useAppStoreContext((s) => s.setPrevPage)
  const setNextPage = useAppStoreContext((s) => s.setNextPage)

  if (!queryResults || queryResults.totalPages < 2) return null

  return (
    <Flex gap={2} align='center'>
      <StyledPaginationButton type='button' onClick={setPrevPage} disabled={currentPage === 0}>
        ←
      </StyledPaginationButton>
      <Text size={1}>
        {currentPage + 1} / {queryResults.totalPages}
      </Text>
      <StyledPaginationButton
        type='button'
        onClick={setNextPage}
        disabled={currentPage === queryResults.totalPages - 1}
      >
        →
      </StyledPaginationButton>
    </Flex>
  )
}

export default SearchPagination
