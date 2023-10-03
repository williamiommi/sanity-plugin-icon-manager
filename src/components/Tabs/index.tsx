import {BookIcon, SearchIcon} from '@sanity/icons'
import {Tab, TabList, TabPanel} from '@sanity/ui'
import {useCallback, useState} from 'react'
import SearchTab from './SearchTab'

const Tabs = () => {
  const [tab, setTab] = useState<'search' | 'collection'>('search')

  const handleClickSearchTab = useCallback(() => {
    setTab('search')
    // clean collection data
  }, [])

  const handleClickCollectionTab = useCallback(() => {
    setTab('collection')
    // clean search data
  }, [])

  return (
    <>
      <TabList padding={4} paddingBottom={0}>
        <Tab
          id='search-tab'
          aria-controls='search-panel'
          selected={tab === 'search'}
          icon={SearchIcon}
          label='Search'
          onClick={handleClickSearchTab}
        />
        <Tab
          id='collections-tab'
          aria-controls='collections-panel'
          selected={tab === 'collection'}
          icon={BookIcon}
          label='Collections'
          onClick={handleClickCollectionTab}
        />
      </TabList>
      <TabPanel id='search-panel' aria-labelledby='search-tab' hidden={tab !== 'search'}>
        <SearchTab />
      </TabPanel>
      <TabPanel
        id='collection-panel'
        aria-labelledby='collection-tab'
        hidden={tab !== 'collection'}
      >
        Collection
      </TabPanel>
    </>
  )
}

export default Tabs
