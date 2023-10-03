import {TabPanel} from '@sanity/ui'
import CollectionsGrid from './CollectionsGrid'

interface TabPanelCollectionProps {
  hidden: boolean
}

const TabPanelCollection = ({hidden}: TabPanelCollectionProps) => {
  return (
    <TabPanel id='collection-panel' aria-labelledby='collection-tab' hidden={hidden}>
      <CollectionsGrid />
    </TabPanel>
  )
}

export default TabPanelCollection
