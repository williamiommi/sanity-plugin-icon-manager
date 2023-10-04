import {Flex, Text} from '@sanity/ui'
import {useDeferredValue, useState} from 'react'
import {useAppStoreContext} from '../../store/context'
import {PaginationButton} from '../../style'
import IconsGrid from './IconsGrid'
import Input from './Input'

const Step1 = () => {
  const selectedCollection = useAppStoreContext((s) => s.selectedCollection)
  const clearSelectedCollection = useAppStoreContext((s) => s.clearSelectedCollection)
  const [searchTerm, setSearchTerm] = useState('')
  const deferredSearchTerm = useDeferredValue(searchTerm)
  return (
    <>
      <Flex gap={2} marginX={4} align='center' marginTop={4}>
        <PaginationButton type='button' onClick={clearSelectedCollection}>
          ←
        </PaginationButton>
        <Text weight='bold' size={3}>
          {selectedCollection?.collection.name}
        </Text>
      </Flex>
      <Input placeholder='Filter icons...' term={searchTerm} onChange={setSearchTerm} />
      <IconsGrid searchTerm={deferredSearchTerm} />
    </>
  )
}

export default Step1
