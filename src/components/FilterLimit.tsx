import {Flex, Inline, Text, TextInput} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {useAppStore} from '../store'

interface FilterLimitProps {}

const FilterLimit = (props: FilterLimitProps) => {
  const limit = useAppStore((s) => s.limit)
  const setLimit = useAppStore((s) => s.setLimit)

  const onChangeLimit = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setLimit(Number(event.currentTarget.value))
    },
    [setLimit],
  )

  return (
    <Flex align='center' gap={4}>
      <Text weight='bold' style={{width: '100px'}}>
        Limit:
      </Text>
      <Inline>
        <TextInput type='number' min={32} max={999} value={limit} onChange={onChangeLimit} />
        <Text size={0} style={{marginLeft: '5px'}}>
          (min 32 / max 999)
        </Text>
      </Inline>
    </Flex>
  )
}

export default FilterLimit
