/* eslint-disable react/jsx-no-bind */
import {Box, Flex, Grid, Text} from '@sanity/ui'
import {memo, useMemo} from 'react'

import {filterCollections} from '../../lib/collections-utils'
import {useAppStoreContext} from '../../store/context'
import CollectionCard from '../CollectionCard'

interface CollectionsGridProps {
  searchTerm?: string
}

const CollectionsGrid = ({searchTerm}: CollectionsGridProps) => {
  const groupedCollections = useAppStoreContext((s) => s.groupedCollections)
  const searchCollection = useAppStoreContext((s) => s.searchCollection)
  const filteredCollections = useMemo(() => {
    return filterCollections(searchTerm, groupedCollections)
  }, [searchTerm, groupedCollections])

  if (!filteredCollections) return null

  return (
    <Box style={{height: '400px', overflowY: 'scroll'}} paddingTop={1}>
      <Flex direction='column' margin={4} marginTop={0} gap={6}>
        {Object.keys(filteredCollections).map((collectionCode) => {
          const items = filteredCollections[collectionCode]

          if (items.length === 0) return null

          return (
            <Flex key={collectionCode} direction='column' gap={3}>
              <Text as='i' weight='bold' size={4}>
                {collectionCode}
              </Text>
              <Grid columns={[1, 1, 2, 2, 3]} gap={3}>
                {filteredCollections[collectionCode].map((collection) => {
                  return (
                    <CollectionCard
                      key={collection.code}
                      collection={collection}
                      onClick={() => searchCollection(collection.code)}
                    />
                  )
                })}
              </Grid>
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}

export default memo(CollectionsGrid)
