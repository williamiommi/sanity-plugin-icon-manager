import {Flex, Grid} from '@sanity/ui'
import {ReactNode} from 'react'

import {useAppStoreContext} from '../../store/context'
import FilterCollection from '../Filters/FilterCollection'
import FilterLimit from '../Filters/FilterLimit'
import FilterPalette from '../Filters/FilterPalette'
import FilterStyle from '../Filters/FilterStyle'

export default function SearchFilters(): ReactNode {
  const isFiltersOpen = useAppStoreContext((s) => s.isFiltersOpen)

  if (!isFiltersOpen) return null

  return (
    <Grid columns={[1, 1, 1, 1, 2]} margin={4} marginTop={0}>
      <Flex direction='column' gap={3}>
        <FilterStyle />
        <FilterPalette />
        <FilterCollection />
        <FilterLimit />
      </Flex>
    </Grid>
  )
}
