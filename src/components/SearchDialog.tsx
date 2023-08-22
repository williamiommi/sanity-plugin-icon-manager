import {Dialog} from '@sanity/ui'
import {useAppStore} from '../store'
import SearchFilters from './SearchFilters'
import SearchInput from './SearchInput'

interface SearchDialogProps {}

const SearchDialog = (props: SearchDialogProps) => {
  const closeDialogOpen = useAppStore((s) => s.closeDialogOpen)
  return (
    <Dialog id='search-dialog' header='Iconify - Search' onClose={closeDialogOpen} width='auto'>
      <SearchInput />
      <SearchFilters />
    </Dialog>
  )
}

export default SearchDialog
