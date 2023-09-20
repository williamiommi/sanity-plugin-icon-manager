import {Flex, Select, Text} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {useAppStoreContext} from '../../store/context'

interface FilterStyleProps {}

const FilterStyle = (props: FilterStyleProps) => {
  const filterStyle = useAppStoreContext((s) => s.filterStyle)
  const setFilterStyle = useAppStoreContext((s) => s.setFilterStyle)

  const onSetFilterStyle = useCallback(
    (event: FormEvent<HTMLSelectElement>) => {
      setFilterStyle(event.currentTarget.value || '')
    },
    [setFilterStyle],
  )

  return (
    <Flex align='center'>
      <Text weight='bold' size={1} style={{width: '100px'}}>
        Style:
      </Text>
      <Flex style={{width: '100%'}}>
        <Select onChange={onSetFilterStyle} value={filterStyle} fontSize={1}>
          <option value=''>Select...</option>
          <option value='stroke'>Stroke</option>
          <option value='fill'>Fill</option>
        </Select>
      </Flex>
    </Flex>
  )
}

export default FilterStyle
