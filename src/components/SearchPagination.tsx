import {Box} from '@sanity/ui'
import useSearchBag from '../hooks/useSearchBag'

interface SearchPaginationProps {}

const SearchPagination = (props: SearchPaginationProps) => {
  const {pages, currentPage, setPrevPage, setNextPage} = useSearchBag()

  if (pages < 2) return null

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
        disabled={currentPage === 1}
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
        {currentPage} / {pages}
      </span>
      <button
        type='button'
        onClick={setNextPage}
        disabled={currentPage === pages}
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
