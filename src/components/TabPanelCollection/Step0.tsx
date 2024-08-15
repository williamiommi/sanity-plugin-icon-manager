import {ReactNode, useDeferredValue, useState} from 'react'

import usePluginTranslation from '../../hooks/usePluginTranslation'
import CollectionsGrid from './CollectionsGrid'
import Input from './Input'

export default function Step0(): ReactNode {
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
