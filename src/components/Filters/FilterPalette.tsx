import {Flex, Select, Text} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import usePluginTranslation from '../../hooks/usePluginTranslation'
import {useAppStoreContext} from '../../store/context'

interface FilterPaletteProps {}

const FilterPalette = (props: FilterPaletteProps) => {
  const {t} = usePluginTranslation()
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
        {t('dialog.add.filter.palette.label')}
      </Text>
      <Flex style={{width: '100%'}}>
        <Select onChange={onSetFilterPalette} value={filterPalette} fontSize={1}>
          <option value=''>{t('dialog.add.filter.select.label')}</option>
          <option value='1'>{t('dialog.add.filter.palette.poly.label')}</option>
          <option value='0'>{t('dialog.add.filter.palette.mono.label')}</option>
        </Select>
      </Flex>
    </Flex>
  )
}

export default FilterPalette
