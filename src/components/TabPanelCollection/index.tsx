/* eslint-disable react/jsx-no-bind */
import {TabPanel} from '@sanity/ui'
import {ReactNode} from 'react'

import {useAppStoreContext} from '../../store/context'
import Step0 from './Step0'
import Step1 from './Step1'

interface TabPanelCollectionProps {
  hidden: boolean
}

export default function TabPanelCollection({hidden}: TabPanelCollectionProps): ReactNode {
  const hasSelectedCollection = useAppStoreContext((s) => s.hasSelectedCollection)
  return (
    <TabPanel id='collection-panel' aria-labelledby='collection-tab' hidden={hidden}>
      {hasSelectedCollection ? <Step1 /> : <Step0 />}
    </TabPanel>
  )
}
