import {Flex, Text} from '@sanity/ui'
import {useAppStore} from '../store'

interface SearchPaginationProps {}

const SearchPagination = (props: SearchPaginationProps) => {
  const queryResults = useAppStore((s) => s.queryResults)
  const currentPage = useAppStore((s) => s.currentPage)
  const setPrevPage = useAppStore((s) => s.setPrevPage)
  const setNextPage = useAppStore((s) => s.setNextPage)

  if (!queryResults || queryResults?.chunks.length < 2) return null

  return (
    <Flex gap={2} align='center'>
      <button
        type='button'
        onClick={setPrevPage}
        disabled={currentPage === 0}
        style={{
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          padding: 0,
          fontSize: '20px',
        }}
      >
        ←
      </button>
      <Text size={1}>
        {currentPage + 1} / {queryResults.chunks.length}
      </Text>
      <button
        type='button'
        onClick={setNextPage}
        disabled={currentPage === queryResults.chunks.length - 1}
        style={{
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          padding: 0,
          fontSize: '20px',
        }}
      >
        →
      </button>
    </Flex>
  )
}

export default SearchPagination
