import {Flex, Text, Tooltip} from '@sanity/ui'
import {BlockProps} from 'sanity'
import {IconManagerType} from '../../types/IconManagerType'
import IconPreview from '../IconPreview'

export type IconManagerInlineBlockComponentProps = BlockProps & IconManagerType

const IconManagerInlineBlockComponent = (props: BlockProps) => {
  const value = props.value as unknown as IconManagerType
  const hasValidIcon = value.icon && value.metadata
  const IconInlinePreview = () => (
    <Tooltip
      portal
      placement='top'
      content={
        <Flex padding={2} direction='column' gap={2}>
          <Text size={1} weight='bold'>
            {value.metadata.iconName || value.icon}
          </Text>
          {value.metadata.collectionName && (
            <Text size={1} muted>
              {value.metadata.collectionName}
            </Text>
          )}
        </Flex>
      }
    >
      <div style={{padding: '0 10px'}}>
        <IconPreview
          value={{icon: value.icon, metadata: value.metadata}}
          width='1rem'
          height='1rem'
          hideText
        />
      </div>
    </Tooltip>
  )

  return props.renderDefault({
    ...props,
    renderPreview: hasValidIcon ? IconInlinePreview : props.renderPreview,
  })
}

export default IconManagerInlineBlockComponent
