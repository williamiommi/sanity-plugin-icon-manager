import {Icon} from '@iconify/react'
import {LaunchIcon} from '@sanity/icons'
import {Box, Flex, Text} from '@sanity/ui'
import {useDeferredValue, useState} from 'react'
import {useAppStoreContext} from '../../store/context'
import IconsGrid from './IconsGrid'
import Input from './Input'

const Step1 = () => {
  const selectedCollection = useAppStoreContext((s) => s.selectedCollection)
  const clearSelectedCollection = useAppStoreContext((s) => s.clearSelectedCollection)
  const [searchTerm, setSearchTerm] = useState('')
  const deferredSearchTerm = useDeferredValue(searchTerm)
  return (
    <>
      <Flex direction='column' gap={2} marginX={4} marginTop={4} marginBottom={5}>
        <Box
          role='button'
          onClick={clearSelectedCollection}
          style={{cursor: 'pointer', fontSize: '22px'}}
        >
          ←
        </Box>
        <Flex gap={2} marginTop={2} justify='center'>
          {selectedCollection?.collection.samples?.map((sample) => (
            <Icon
              key={`${selectedCollection?.collection.code}:${sample}`}
              icon={`${selectedCollection?.collection.code}:${sample}`}
              width={22}
              height={22}
            />
          ))}
        </Flex>
        <Flex align='center' direction='column' gap={3}>
          <Text weight='bold' size={4}>
            {selectedCollection?.collection.name}
          </Text>
          <Flex
            gap={1}
            align='center'
            as='a'
            href={selectedCollection?.collection.author.url}
            target='_blank'
            style={{textDecoration: 'none', fontStyle: 'italic'}}
          >
            <Text muted size={2}>
              by {selectedCollection?.collection.author.name}
            </Text>
            <LaunchIcon width={12} style={{color: 'initial'}} />
          </Flex>
        </Flex>
      </Flex>
      <Input placeholder='Filter icons...' term={searchTerm} onChange={setSearchTerm} />
      <IconsGrid searchTerm={deferredSearchTerm} />
    </>
  )
}

export default Step1
