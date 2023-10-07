/* eslint-disable react/jsx-no-bind */
import {BookIcon, SearchIcon} from '@sanity/icons'
import {Tab, TabList} from '@sanity/ui'
import {useState} from 'react'
import TabPanelCollection from '../TabPanelCollection'
import TabContentSearch from '../TabPanelSearch'

const Tabs = () => {
  const [tab, setTab] = useState<'search' | 'collection'>('search')

  return (
    <>
      <TabList padding={4} paddingBottom={0} space={1}>
        <Tab
          id='search-tab'
          aria-controls='search-panel'
          selected={tab === 'search'}
          icon={SearchIcon}
          label='Search'
          onClick={() => setTab('search')}
        />
        <Tab
          id='collections-tab'
          aria-controls='collections-panel'
          selected={tab === 'collection'}
          icon={BookIcon}
          label='Collections'
          onClick={() => setTab('collection')}
        />
      </TabList>
      <TabContentSearch hidden={tab !== 'search'} />
      <TabPanelCollection hidden={tab !== 'collection'} />
    </>
  )
}

export default Tabs
