import {useDeferredValue, useState} from 'react'
import CollectionsGrid from './CollectionsGrid'
import Input from './Input'

const Step0 = () => {
  const [searchCollectionTerm, setSearchCollectionTerm] = useState('')
  const deferredSearchCollectionTerm = useDeferredValue(searchCollectionTerm)
  return (
    <>
      <Input
        placeholder='Filter collections...'
        term={searchCollectionTerm}
        onChange={setSearchCollectionTerm}
      />
      <CollectionsGrid searchTerm={deferredSearchCollectionTerm} />
    </>
  )
}

export default Step0
