import {Button, Flex, Text, Tooltip} from '@sanity/ui'
import {ReactNode} from 'react'

import IconPreview from '../IconPreview'

interface ResultsGridItemProps {
  icon: string
  iconName?: string
  collectionName?: string
  onClick: () => void
}

export default function ResultsGridItem({
  icon,
  iconName,
  collectionName,
  onClick,
}: ResultsGridItemProps): ReactNode {
  return (
    <Flex
      justify='center'
      as='li'
      key={icon}
      style={{width: 50, height: 50, justifySelf: 'center'}}
    >
      <Tooltip
        portal
        placement='top'
        content={
          <Flex direction='column' padding={2} gap={2}>
            <Text size={1} weight='bold'>
              {iconName || icon}
            </Text>
            {collectionName && (
              <Text size={1} muted>
                {collectionName}
              </Text>
            )}
          </Flex>
        }
      >
        <Button
          key={icon}
          mode='bleed'
          icon={<IconPreview icon={icon} width='30' height='30' />}
          data-value={icon}
          onClick={onClick}
          style={{cursor: 'pointer'}}
        />
      </Tooltip>
    </Flex>
  )
}
