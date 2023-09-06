import {Flex, Inline, Radio, Text} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {useAppStoreContext} from '../store/context'

interface FilterStyleProps {}

const FilterStyle = (props: FilterStyleProps) => {
  const filterStyle = useAppStoreContext((s) => s.filterStyle)
  const setFilterStyle = useAppStoreContext((s) => s.setFilterStyle)

  const onSetFilterStyle = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setFilterStyle(event.currentTarget.value || '')
    },
    [setFilterStyle],
  )

  return (
    <Flex align='center' gap={4}>
      <Text weight='bold' style={{width: '100px'}}>
        Style:
      </Text>
      <Inline>
        <Radio name='style' value='' checked={filterStyle === ''} onChange={onSetFilterStyle} />
        <Text style={{marginLeft: '5px'}}>n/a</Text>
        <Radio
          name='style'
          value='stroke'
          style={{marginLeft: '15px'}}
          checked={filterStyle === 'stroke'}
          onChange={onSetFilterStyle}
        />
        <Text style={{marginLeft: '5px'}}>Stroke</Text>
        <Radio
          name='style'
          value='fill'
          style={{marginLeft: '15px'}}
          checked={filterStyle === 'fill'}
          onChange={onSetFilterStyle}
        />
        <Text style={{marginLeft: '5px'}}>Fill</Text>
      </Inline>
    </Flex>
  )
}

export default FilterStyle
