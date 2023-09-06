import {Card, Flex} from '@sanity/ui'
import {useAppStoreContext} from '../store/context'
import FilterLimit from './FilterLimit'
import FilterPalette from './FilterPalette'
import FilterSeparator from './FilterSeparator'
import FilterStyle from './FilterStyle'

interface SearchFiltersProps {}

const SearchFilters = (props: SearchFiltersProps) => {
  const isFiltersOpen = useAppStoreContext((s) => s.isFiltersOpen)

  if (!isFiltersOpen) return null

  return (
    <Card marginX={4} marginBottom={4} radius={2} padding={3} border>
      <Flex direction='column' gap={3} marginY={3}>
        <FilterStyle />
        <FilterSeparator />
        <FilterPalette />
        <FilterSeparator />
        <FilterLimit />
      </Flex>
    </Card>
  )
}

export default SearchFilters
