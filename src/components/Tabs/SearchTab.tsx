import {useAppStoreContext} from '../../store/context'
import ResultsGrid from '../ResultsGrid'
import SearchFilters from '../Search/SearchFilters'
import SearchInput from '../Search/SearchInput'

const SearchTab = () => {
  const searchResults = useAppStoreContext((s) => s.searchResults)
  return (
    <>
      <SearchInput />
      <SearchFilters />
      <ResultsGrid items={searchResults} />
    </>
  )
}

export default SearchTab
