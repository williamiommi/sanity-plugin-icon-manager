import {Card} from '@sanity/ui'
import {useAppStore} from '../store'
import FilterPalette from './FilterPalette'
import FilterStyle from './FilterStyle'

interface SearchFiltersProps {}

const SearchFilters = (props: SearchFiltersProps) => {
  const isFiltersOpen = useAppStore((s) => s.isFiltersOpen)

  if (!isFiltersOpen) return null

  return (
    <Card marginX={4} marginBottom={4} radius={2} padding={3} border>
      <FilterStyle />
      <Card style={{height: 2}} marginY={4} tone='primary'>
        &nbsp;
      </Card>
      <FilterPalette />
    </Card>
  )
}

export default SearchFilters
