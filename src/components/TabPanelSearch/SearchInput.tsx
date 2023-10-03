/* eslint-disable react/jsx-no-bind */
import {ControlsIcon, SearchIcon} from '@sanity/icons'
import {Box, Button, Flex, TextInput} from '@sanity/ui'
import {useAppStoreContext} from '../../store/context'
import {TextFilterCollection} from '../../style'
import FilterBadge from '../Filters/FilterBadge'

interface SearchInputProps {}

const SearchInput = (props: SearchInputProps) => {
  const searchTerm = useAppStoreContext((s) => s.searchTerm)
  const isFiltersOpen = useAppStoreContext((s) => s.isFiltersOpen)
  const countFiltersApplied = useAppStoreContext((s) => s.countFiltersApplied())
  const toggleFilters = useAppStoreContext((s) => s.toggleFilters)
  const searchIcons = useAppStoreContext((s) => s.searchIcons)
  const setSearchTerm = useAppStoreContext((s) => s.setSearchTerm)
  const filterCollection = useAppStoreContext((s) => s.filterCollection)

  return (
    <Flex
      as='form'
      padding={4}
      gap={2}
      justify='space-between'
      align='center'
      onSubmit={searchIcons}
    >
      <Box style={{position: 'relative'}}>
        <FilterBadge count={countFiltersApplied} />
        <Button
          icon={ControlsIcon}
          mode={isFiltersOpen ? 'default' : 'ghost'}
          tone='primary'
          style={{cursor: 'pointer'}}
          onClick={() => toggleFilters()}
        />
      </Box>
      <Box style={{flex: 1, position: 'relative'}}>
        <TextFilterCollection size={1} muted>
          Collection: <strong>{filterCollection ? filterCollection.name : 'All'}</strong>
        </TextFilterCollection>
        <TextInput
          style={{paddingTop: '18px'}}
          placeholder='Search icons...'
          onChange={setSearchTerm}
        />
      </Box>
      <Button
        type='submit'
        iconRight={SearchIcon}
        text='Search'
        tone='primary'
        style={{cursor: 'pointer'}}
        disabled={!searchTerm}
      />
    </Flex>
  )
}

export default SearchInput
