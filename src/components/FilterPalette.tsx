import {Flex, Inline, Switch, Text} from '@sanity/ui'
import {useAppStore} from '../store'

interface FilterPaletteProps {}

const FilterPalette = (props: FilterPaletteProps) => {
  const toggleFilterPalette = useAppStore((s) => s.toggleFilterPalette)

  return (
    <Flex align='center' gap={4}>
      <Text weight='bold'>Palette:</Text>
      <Inline>
        <Switch name='palette' value='true' onClick={toggleFilterPalette} />
      </Inline>
    </Flex>
  )
}

export default FilterPalette
