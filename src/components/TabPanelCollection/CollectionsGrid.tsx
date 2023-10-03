import {Icon} from '@iconify/react'
import {Card, Flex, Grid, Text} from '@sanity/ui'
import {stringifyHeight} from '../../lib/iconifyUtils'
import {IconifyInfoEnhanced} from '../../types/IconifyInfoEnhanced'
import HeightLightIcon from '../icons/HeightLightIcon'

interface CollectionsGridProps {
  collections?: Record<string, IconifyInfoEnhanced[]>
}

const CollectionsGrid = ({collections}: CollectionsGridProps) => {
  if (!collections) return null

  return (
    <Flex direction='column' margin={4} marginTop={0} gap={6}>
      {Object.keys(collections).map((collectionCode) => {
        const items = collections[collectionCode]

        if (items.length === 0) return null

        return (
          <Flex key={collectionCode} direction='column' gap={3}>
            <Text as='i' weight='bold' size={4}>
              {collectionCode}
            </Text>
            <Grid columns={[1, 1, 2, 2, 3]} gap={3}>
              {collections[collectionCode].map((collection) => {
                return (
                  <Card key={collection.code} border style={{cursor: 'pointer'}}>
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
  )
}

export default CollectionsGrid
