import {Dialog} from '@sanity/ui'

import {useAppStoreContext} from '../../../store/context'
import NoCollectionBadge from '../../NoCollectionBadge'
import Tabs from '../../Tabs'
import Header from './Header'

const SearchDialog = () => {
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

export default SearchDialog
