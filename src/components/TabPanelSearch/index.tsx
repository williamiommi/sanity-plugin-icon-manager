import {TabPanel} from '@sanity/ui'
import {ReactNode} from 'react'

import {useAppStoreContext} from '../../store/context'
import ResultsGrid from '../ResultsGrid'
import SearchFilters from './SearchFilters'
import SearchInput from './SearchInput'

interface TabPanelSearchProps {
  hidden: boolean
}

export default function TabPanelSearch({hidden}: TabPanelSearchProps): ReactNode {
  const searchResults = useAppStoreContext((s) => s.searchResults)
  return (
    <TabPanel id='search-panel' aria-labelledby='search-tab' hidden={hidden}>
      <SearchInput />
      <SearchFilters />
      <ResultsGrid showBorder items={searchResults} margin={4} marginTop={0} />
    </TabPanel>
  )
}
