import {SearchIcon} from '@sanity/icons'
import {Box, Button, Flex, TextInput} from '@sanity/ui'
import useSearchBag from '../hooks/useSearchBag'
import {useAppStore} from '../store'

interface SearchInputProps {}

const SearchInput = (props: SearchInputProps) => {
  const searchTerm = useAppStore((s) => s.searchTerm)
  const {onChangeSearchTerm, searchIcons} = useSearchBag()
  return (
    <Flex padding={4} gap={2} justify='space-between'>
      <Box style={{width: '100%'}}>
        <TextInput placeholder='Search icons...' padding={3} onChange={onChangeSearchTerm} />
      </Box>
      <Button
        iconRight={SearchIcon}
        text='Search'
        tone='primary'
        style={{cursor: 'pointer'}}
        onClick={searchIcons}
        disabled={!searchTerm}
      />
    </Flex>
  )
}

export default SearchInput
