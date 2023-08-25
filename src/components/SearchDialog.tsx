import {Dialog} from '@sanity/ui'
import {useAppStore} from '../store'
import SearchFilters from './SearchFilters'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

interface SearchDialogProps {}

const SearchDialog = (props: SearchDialogProps) => {
  const closeSearchDialog = useAppStore((s) => s.closeSearchDialog)
  return (
    <Dialog id='search-dialog' header='🙂 Iconify' onClose={closeSearchDialog} width={2}>
      <SearchInput />
      <SearchFilters />
      <SearchResults />
    </Dialog>
  )
}

export default SearchDialog
