import {Flex, Select, Text} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {useAppStoreContext} from '../../store/context'

interface FilterPaletteProps {}

const FilterPalette = (props: FilterPaletteProps) => {
  const filterPalette = useAppStoreContext((s) => s.filterPalette)
  const setFilterPalette = useAppStoreContext((s) => s.setFilterPalette)

  const onSetFilterPalette = useCallback(
    (event: FormEvent<HTMLSelectElement>) => {
      setFilterPalette(event.currentTarget.value || '')
    },
    [setFilterPalette],
  )

  return (
    <Flex align='center'>
      <Text weight='bold' size={1} style={{width: '100px'}}>
        Palette:
      </Text>
      <Flex style={{width: '100%'}}>
        <Select onChange={onSetFilterPalette} fontSize={1}>
          <option value=''>Select...</option>
          <option value='1' selected={filterPalette === '1'}>
            Polychrome
          </option>
          <option value='0' selected={filterPalette === '0'}>
            Monochrome
          </option>
        </Select>
      </Flex>
    </Flex>
  )
}

export default FilterPalette
