import {Flex, Text, TextInput} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../lib/constants'
import {useAppStoreContext} from '../../store/context'

interface FilterLimitProps {}

const FilterLimit = (props: FilterLimitProps) => {
  const {t} = useTranslation(I18N_NAMESPACE)
  const limit = useAppStoreContext((s) => s.limit)
  const setLimit = useAppStoreContext((s) => s.setLimit)

  const onChangeLimit = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setLimit(Number(event.currentTarget.value))
    },
    [setLimit],
  )

  return (
    <Flex align='center'>
      <Text weight='bold' size={1} style={{width: '100px'}}>
        {t('dialog.add.filter.limit.label')}
      </Text>
      <Flex align='center' gap={2} style={{width: '100%'}}>
        <TextInput
          type='number'
          min={32}
          max={999}
          value={limit}
          fontSize={1}
          onChange={onChangeLimit}
          style={{padding: '5px 1px 5px 5px'}}
        />
        <Text as='i' size={0}>
          {t('dialog.add.filter.limit.info.label')}
        </Text>
      </Flex>
    </Flex>
  )
}

export default FilterLimit
