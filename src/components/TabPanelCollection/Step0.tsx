import {useDeferredValue, useState} from 'react'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../lib/constants'
import CollectionsGrid from './CollectionsGrid'
import Input from './Input'

const Step0 = () => {
  const {t} = useTranslation(I18N_NAMESPACE)
  const [searchCollectionTerm, setSearchCollectionTerm] = useState('')
  const deferredSearchCollectionTerm = useDeferredValue(searchCollectionTerm)
  return (
    <>
      <Input
        placeholder={t('dialog.add.input.search.collections.placeholder')}
        term={searchCollectionTerm}
        onChange={setSearchCollectionTerm}
      />
      <CollectionsGrid searchTerm={deferredSearchCollectionTerm} />
    </>
  )
}

export default Step0
