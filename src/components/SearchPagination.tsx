import {Box} from '@sanity/ui'
import {useAppStore} from '../store'

interface SearchPaginationProps {}

const SearchPagination = (props: SearchPaginationProps) => {
  const queryResults = useAppStore((s) => s.queryResults)
  const currentPage = useAppStore((s) => s.currentPage)
  const setPrevPage = useAppStore((s) => s.setPrevPage)
  const setNextPage = useAppStore((s) => s.setNextPage)

  if (!queryResults || queryResults?.chunks.length < 2) return null

  return (
    <Box
      marginX={4}
      style={{
        textAlign: 'right',
        marginTop: '10px',
        marginBottom: '5px',
      }}
    >
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
      <span style={{marginInline: '10px'}}>
        {currentPage + 1} / {queryResults.chunks.length}
      </span>
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
    </Box>
  )
}

export default SearchPagination
