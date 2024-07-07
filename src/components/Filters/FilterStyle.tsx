import {Flex, Select, Text} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../lib/constants'
import {useAppStoreContext} from '../../store/context'

interface FilterStyleProps {}

const FilterStyle = (props: FilterStyleProps) => {
  const {t} = useTranslation(I18N_NAMESPACE)
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
        {t('dialog.add.filter.style.label')}
      </Text>
      <Flex style={{width: '100%'}}>
        <Select onChange={onSetFilterStyle} value={filterStyle} fontSize={1}>
          <option value=''>{t('dialog.add.filter.select.label')}</option>
          <option value='stroke'>{t('dialog.add.filter.style.stroke.label')}</option>
          <option value='fill'>{t('dialog.add.filter.style.fill.label')}</option>
        </Select>
      </Flex>
    </Flex>
  )
}

export default FilterStyle
