import {Icon} from '@iconify/react'
import {Button, Card, Flex, Spinner, Text} from '@sanity/ui'
import useIsInViewport from '../hooks/useIsInViewport'
import {stringifyHeight} from '../lib/iconify-utils'
import {IconifyInfoEnhanced} from '../types/IconifyInfoEnhanced'
import HeightLightIcon from './icons/HeightLightIcon'

interface Props {
  collection: IconifyInfoEnhanced
  onClick: () => void
}

export default function CollectionCard({collection, onClick}: Props) {
  const {ref, elementHitViewport} = useIsInViewport<HTMLButtonElement>({
    threshold: 0.3,
  })
  return (
    <Card border>
      <Button
        ref={ref}
        mode='bleed'
        tone='default'
        onClick={onClick}
        style={{cursor: 'pointer', width: '100%', height: '100%'}}
      >
        <Flex align='center'>
          <Flex direction='column' gap={2} style={{width: 'calc(100% - 80px)'}}>
            <Text weight='semibold' textOverflow='ellipsis' title={collection.name}>
              {collection.name}
            </Text>
            <Text size={0} muted textOverflow='ellipsis' title={collection.license.title}>
              {collection.license.title}
            </Text>
          </Flex>
          <Flex direction='column' gap={2} style={{width: '80px'}}>
            <Flex justify='flex-end' gap={1}>
              {elementHitViewport &&
                collection.samples?.map((sample) => (
                  <Icon key={sample} icon={`${collection.code}:${sample}`} width={15} />
                ))}
              {!elementHitViewport &&
                [0, 1, 2].map((sample) => <Spinner key={sample} width={15} />)}
            </Flex>
            <Flex align='center' justify='flex-end' gap={1}>
              <Text weight='bold' size={0}>
                #{collection.total}
              </Text>
              {collection.height && (
                <Flex align='center'>
                  <HeightLightIcon width={12} height={12} />
                  <Text size={0}>{stringifyHeight(collection.height)}</Text>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Button>
    </Card>
  )
}
