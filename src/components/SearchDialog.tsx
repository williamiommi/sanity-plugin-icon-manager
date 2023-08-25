import {Dialog, Flex} from '@sanity/ui'
import {useAppStore} from '../store'
import IconifySmile from './IconifySmile'
import SearchFilters from './SearchFilters'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

interface SearchDialogProps {}

const DialogHeader = () => (
  <Flex align='center' gap={2}>
    <IconifySmile /> Find your icon
  </Flex>
)

const SearchDialog = (props: SearchDialogProps) => {
  const isSearchDialogOpen = useAppStore((s) => s.isSearchDialogOpen)
  const closeSearchDialog = useAppStore((s) => s.closeSearchDialog)

  if (!isSearchDialogOpen) return null

  return (
    <Dialog id='search-dialog' header={<DialogHeader />} onClose={closeSearchDialog} width={2}>
      <SearchInput />
      <SearchFilters />
      <SearchResults />
    </Dialog>
  )
}

export default SearchDialog
