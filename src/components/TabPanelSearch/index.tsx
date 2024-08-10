import {TabPanel} from '@sanity/ui'

import {useAppStoreContext} from '../../store/context'
import ResultsGrid from '../ResultsGrid'
import SearchFilters from './SearchFilters'
import SearchInput from './SearchInput'

interface TabPanelSearchProps {
  hidden: boolean
}

const TabPanelSearch = ({hidden}: TabPanelSearchProps) => {
  const searchResults = useAppStoreContext((s) => s.searchResults)
  return (
    <TabPanel id='search-panel' aria-labelledby='search-tab' hidden={hidden}>
      <SearchInput />
      <SearchFilters />
      <ResultsGrid items={searchResults} />
    </TabPanel>
  )
}

export default TabPanelSearch
