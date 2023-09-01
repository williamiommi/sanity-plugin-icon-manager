import {Icon} from '@iconify-icon/react'
import {Flex, Text} from '@sanity/ui'
import {getFlipValue} from '../../lib/iconTransformation'
import {IconifyType} from '../../types/IconifyType'

interface IconPreviewProps {
  value: IconifyType
  width?: string | number
  height?: string | number
  hideText?: boolean
}

const IconPreview = ({value, width = 50, height = 50, hideText = false}: IconPreviewProps) => {
  const {
    icon,
    metadata: {flipH, flipV, rotate, color, size},
  } = value

  if (!value.icon) return null

  return (
    <Flex direction='column' align='center' justify='center' gap={2}>
      <Icon
        icon={icon}
        {...((flipH || flipV) && {flip: getFlipValue(flipH, flipV)})}
        {...(rotate && {rotate})}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...(color && color.hex && {color: color.hex}),
        }}
        width={width}
        height={height}
      />
      {!hideText && (
        <Text size={0} style={{opacity: 0.8}}>
          {size.width} x {size.height}
        </Text>
      )}
    </Flex>
  )
}

export default IconPreview
