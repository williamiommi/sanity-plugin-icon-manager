/* eslint-disable react/jsx-no-bind */
import {TabPanel} from '@sanity/ui'
import {useDeferredValue, useState} from 'react'
import CollectionInput from './CollectionInput'
import CollectionsGrid from './CollectionsGrid'

interface TabPanelCollectionProps {
  hidden: boolean
}

const TabPanelCollection = ({hidden}: TabPanelCollectionProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const deferredSearchTerm = useDeferredValue(searchTerm)

  return (
    <TabPanel id='collection-panel' aria-labelledby='collection-tab' hidden={hidden}>
      <CollectionInput onChange={setSearchTerm} />
      <CollectionsGrid searchTerm={deferredSearchTerm} />
    </TabPanel>
  )
}

export default TabPanelCollection
