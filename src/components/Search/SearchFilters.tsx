import {Card, Flex} from '@sanity/ui'
import {useAppStoreContext} from '../../store/context'
import FilterLimit from '../Filters/FilterLimit'
import FilterPalette from '../Filters/FilterPalette'
import FilterSeparator from '../Filters/FilterSeparator'
import FilterStyle from '../Filters/FilterStyle'

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
