import {Flex, Inline, Radio, Text} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {useAppStore} from '../store'

interface FilterStyleProps {}

const FilterStyle = (props: FilterStyleProps) => {
  const filterStyle = useAppStore((s) => s.filterStyle)
  const setFilterStyle = useAppStore((s) => s.setFilterStyle)

  const onSetFilterStyle = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setFilterStyle(event.currentTarget.dataset.style || '')
    },
    [setFilterStyle],
  )

  return (
    <Flex align='center' gap={4}>
      <Text weight='bold'>Style:</Text>
      <Inline>
        <Radio name='style' value='' checked={filterStyle === ''} onClick={onSetFilterStyle} />
        <Text style={{marginLeft: '5px'}}>All</Text>
        <Radio
          name='style'
          value='stroke'
          style={{marginLeft: '15px'}}
          checked={filterStyle === 'stroke'}
          data-style='stroke'
          onClick={onSetFilterStyle}
        />
        <Text style={{marginLeft: '5px'}}>Stroke</Text>
        <Radio
          name='style'
          value='fill'
          style={{marginLeft: '15px'}}
          checked={filterStyle === 'fill'}
          data-style='fill'
          onClick={onSetFilterStyle}
        />
        <Text style={{marginLeft: '5px'}}>Fill</Text>
      </Inline>
    </Flex>
  )
}

export default FilterStyle
