import {Flex, Inline, Radio, Text} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {useAppStoreContext} from '../store/context'

interface FilterPaletteProps {}

const FilterPalette = (props: FilterPaletteProps) => {
  const filterPalette = useAppStoreContext((s) => s.filterPalette)
  const setFilterPalette = useAppStoreContext((s) => s.setFilterPalette)

  const onSetFilterPalette = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setFilterPalette(event.currentTarget.value || '')
    },
    [setFilterPalette],
  )

  return (
    <Flex align='center' gap={4}>
      <Text weight='bold' style={{width: '100px'}}>
        Palette:
      </Text>
      <Inline>
        <Radio
          name='palette'
          value=''
          checked={filterPalette === ''}
          onChange={onSetFilterPalette}
        />
        <Text style={{marginLeft: '5px'}}>n/a</Text>
        <Radio
          name='palette'
          value='1'
          style={{marginLeft: '15px'}}
          checked={filterPalette === '1'}
          onChange={onSetFilterPalette}
        />
        <Text style={{marginLeft: '5px'}}>Yes</Text>
        <Radio
          name='palette'
          value='0'
          style={{marginLeft: '15px'}}
          checked={filterPalette === '0'}
          onChange={onSetFilterPalette}
        />
        <Text style={{marginLeft: '5px'}}>No</Text>
      </Inline>
    </Flex>
  )
}

export default FilterPalette
