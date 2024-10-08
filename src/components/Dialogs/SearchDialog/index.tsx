import {Dialog} from '@sanity/ui'
import {ReactNode} from 'react'

import {useAppStoreContext} from '../../../store/context'
import NoCollectionBadge from '../../NoCollectionBadge'
import Tabs from '../../Tabs'
import Header from './Header'

export default function SearchDialog(): ReactNode {
  const isSearchDialogOpen = useAppStoreContext((s) => s.isSearchDialogOpen)
  const closeSearchDialog = useAppStoreContext((s) => s.closeSearchDialog)
  const groupedCollections = useAppStoreContext((s) => s.groupedCollections)

  if (!isSearchDialogOpen || !groupedCollections) return null

  return (
    <Dialog id='search-dialog' header={<Header />} onClose={closeSearchDialog} width={2}>
      {Object.keys(groupedCollections).length === 0 ? <NoCollectionBadge /> : <Tabs />}
    </Dialog>
  )
}
