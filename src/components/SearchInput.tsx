import {ControlsIcon, SearchIcon} from '@sanity/icons'
import {Box, Button, Flex, TextInput} from '@sanity/ui'
import {useCallback} from 'react'
import useSearchBag from '../hooks/useSearchBag'
import {useAppStore} from '../store'
import FilterBadge from './FilterBadge'

interface SearchInputProps {}

const SearchInput = (props: SearchInputProps) => {
  const searchTerm = useAppStore((s) => s.searchTerm)
  const isFiltersOpen = useAppStore((s) => s.isFiltersOpen)
  const countFiltersApplied = useAppStore((s) => s.countFiltersApplied())
  const toggleFilters = useAppStore((s) => s.toggleFilters)
  const {onChangeSearchTerm, searchIcons} = useSearchBag()

  const onToggleFilters = useCallback(() => {
    toggleFilters()
  }, [toggleFilters])

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
          onClick={onToggleFilters}
        />
      </Box>
      <Box style={{flex: 1}}>
        <TextInput placeholder='Search icons...' onChange={onChangeSearchTerm} />
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
