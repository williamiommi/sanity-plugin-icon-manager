import {useDeferredValue, useState} from 'react'

import usePluginTranslation from '../../hooks/usePluginTranslation'
import CollectionsGrid from './CollectionsGrid'
import Input from './Input'

const Step0 = () => {
  const {t} = usePluginTranslation()
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
