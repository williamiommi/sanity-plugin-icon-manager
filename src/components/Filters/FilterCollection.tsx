import {Flex, Select, Text} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../lib/constants'
import {useAppStoreContext} from '../../store/context'

const FilterCollection = () => {
  const {t} = useTranslation(I18N_NAMESPACE)
  const groupedCollections = useAppStoreContext((s) => s.groupedCollections)
  const filterCollection = useAppStoreContext((s) => s.filterCollection)
  const setFilterCollection = useAppStoreContext((s) => s.setFilterCollection)

  const handleFilterCollectionChange = useCallback(
    (event: FormEvent<HTMLSelectElement>) => {
      const {
        currentTarget: {value, options, selectedIndex},
      } = event
      setFilterCollection(value, options[selectedIndex].innerText)
    },
    [setFilterCollection],
  )

  if (!groupedCollections) return null

  return (
    <Flex align='center'>
      <Text weight='bold' size={1} style={{width: '100px'}}>
        {t('dialog.add.filter.collection.label')}
      </Text>
      <Flex style={{width: '100%'}}>
        <Select onChange={handleFilterCollectionChange} value={filterCollection?.code} fontSize={1}>
          <option value=''>{t('dialog.add.filter.select.label')}</option>
          {Object.keys(groupedCollections).map((category) => (
            <optgroup key={category} label={category}>
              {groupedCollections[category].map((collection) => (
                <option key={collection.code} value={collection.code}>
                  {collection.name}
                </option>
              ))}
            </optgroup>
          ))}
        </Select>
      </Flex>
    </Flex>
  )
}

export default FilterCollection
