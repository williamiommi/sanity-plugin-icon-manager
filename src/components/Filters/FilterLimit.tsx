import {Flex, Inline, Text, TextInput} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {useAppStoreContext} from '../../store/context'

interface FilterLimitProps {}

const FilterLimit = (props: FilterLimitProps) => {
  const limit = useAppStoreContext((s) => s.limit)
  const setLimit = useAppStoreContext((s) => s.setLimit)

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
        <TextInput
          type='number'
          padding={2}
          min={32}
          max={999}
          value={limit}
          onChange={onChangeLimit}
        />
        <Text size={0} style={{marginLeft: '5px', fontStyle: 'italic'}}>
          (min 32 / max 999 - default 999)
        </Text>
      </Inline>
    </Flex>
  )
}

export default FilterLimit
