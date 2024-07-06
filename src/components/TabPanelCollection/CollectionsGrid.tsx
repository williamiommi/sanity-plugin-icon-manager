/* eslint-disable react/jsx-no-bind */
import {Icon} from '@iconify/react'
import {Box, Card, Flex, Grid, Text} from '@sanity/ui'
import {memo, useMemo} from 'react'
import {filterCollections} from '../../lib/collections-utils'
import {stringifyHeight} from '../../lib/iconify-utils'
import {useAppStoreContext} from '../../store/context'
import HeightLightIcon from '../icons/HeightLightIcon'

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
                    <Card
                      role='button'
                      key={collection.code}
                      border
                      style={{cursor: 'pointer'}}
                      onClick={() => searchCollection(collection.code)}
                    >
                      <Flex direction='column' style={{height: '100%'}} justify='space-between'>
                        <Flex direction='column' paddingX={3} paddingY={4} gap={2}>
                          <Text weight='bold' size={2}>
                            {collection.name}
                          </Text>
                          <Text as='i' muted size={1}>
                            by {collection.author.name}
                          </Text>
                        </Flex>
                        <Card tone='transparent' paddingX={3} paddingY={2}>
                          <Flex justify='space-between' align='center'>
                            <Flex gap={2} align='center'>
                              {collection.samples?.map((sample) => (
                                <Icon
                                  key={sample}
                                  icon={`${collection.code}:${sample}`}
                                  width={18}
                                  height={18}
                                />
                              ))}
                            </Flex>
                            <Flex align='center' gap={2}>
                              <Text as='i' size={1} weight='semibold'>
                                #{collection.total}
                              </Text>
                              {collection.height && (
                                <Flex align='center' gap={0}>
                                  <HeightLightIcon />
                                  <Text size={0}>{stringifyHeight(collection.height)}</Text>
                                </Flex>
                              )}
                            </Flex>
                          </Flex>
                        </Card>
                      </Flex>
                    </Card>
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
