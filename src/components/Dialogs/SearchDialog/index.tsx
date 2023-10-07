import {Dialog} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'
import Tabs from '../../Tabs'
import Header from './Header'

const SearchDialog = () => {
  const isSearchDialogOpen = useAppStoreContext((s) => s.isSearchDialogOpen)
  const closeSearchDialog = useAppStoreContext((s) => s.closeSearchDialog)

  if (!isSearchDialogOpen) return null

  return (
    <Dialog id='search-dialog' header={<Header />} onClose={closeSearchDialog} width={2}>
      <Tabs />
    </Dialog>
  )
}

export default SearchDialog
