import {Card, Flex, Text, Tooltip} from '@sanity/ui'
import {PreviewProps} from 'sanity'
import {IconifyType} from '../../types/IconifyType'
import IconPreview from '../IconPreview'

export type IconifyPreviewComponentProps = PreviewProps & IconifyType

const IconifyPreviewComponent = (props: IconifyPreviewComponentProps) => {
  if (props.isPlaceholder || !props.icon) return props.renderDefault(props)

  return (
    <Tooltip
      portal
      content={
        <Card padding={2}>
          <Text size={1}>{props.icon}</Text>
        </Card>
      }
    >
      <Flex
        padding={2}
        gap={3}
        align='center'
        justify='center'
        style={{...(props.metadata.color && {color: props.metadata.color.hex})}}
      >
        <IconPreview value={{icon: props.icon, metadata: props.metadata}} width={40} height={40} />
      </Flex>
    </Tooltip>
  )
}

export default IconifyPreviewComponent
