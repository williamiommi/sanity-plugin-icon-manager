/* eslint-disable react/jsx-no-bind */
import {TabPanel} from '@sanity/ui'
import {FormEvent, useDeferredValue, useMemo, useState} from 'react'
import {filterCollections} from '../../lib/collectionsUtils'
import {useAppStoreContext} from '../../store/context'
import CollectionInput from './CollectionInput'
import CollectionsGrid from './CollectionsGrid'

interface TabPanelCollectionProps {
  hidden: boolean
}

const TabPanelCollection = ({hidden}: TabPanelCollectionProps) => {
  const groupedCollections = useAppStoreContext((s) => s.groupedCollections)
  const [searchTerm, setSearchTerm] = useState('')
  const deferredSearchTerm = useDeferredValue(searchTerm)

  const filteredCollections = useMemo(() => {
    return filterCollections(deferredSearchTerm, groupedCollections)
  }, [deferredSearchTerm, groupedCollections])

  const handleOnInput = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value)
  }

  return (
    <TabPanel id='collection-panel' aria-labelledby='collection-tab' hidden={hidden}>
      <CollectionInput onInput={handleOnInput} />
      <CollectionsGrid collections={filteredCollections} />
    </TabPanel>
  )
}

export default TabPanelCollection
