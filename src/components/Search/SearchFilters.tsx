import {Flex, Grid} from '@sanity/ui'
import {useAppStoreContext} from '../../store/context'
import FilterLimit from '../Filters/FilterLimit'
import FilterPalette from '../Filters/FilterPalette'
import FilterStyle from '../Filters/FilterStyle'

interface SearchFiltersProps {}

const SearchFilters = (props: SearchFiltersProps) => {
  const isFiltersOpen = useAppStoreContext((s) => s.isFiltersOpen)

  if (!isFiltersOpen) return null

  return (
    <Grid columns={[1, 1, 1, 1, 2]} margin={4} marginTop={0}>
      <Flex direction='column' gap={3}>
        <FilterStyle />
        <FilterPalette />
        <FilterLimit />
      </Flex>
    </Grid>
  )
}

export default SearchFilters
