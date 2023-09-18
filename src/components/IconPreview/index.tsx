import {Icon} from '@iconify-icon/react'
import {Flex, Text} from '@sanity/ui'
import {getFlipValue} from '../../lib/iconifyUtils'
import {IconifyType} from '../../types/IconifyType'

interface IconPreviewProps {
  value?: IconifyType
  icon?: string
  width?: string | number
  height?: string | number
  hideText?: boolean
}

const IconPreview = ({
  icon,
  value,
  width = 50,
  height = 50,
  hideText = false,
}: IconPreviewProps) => {
  if (icon)
    return (
      <Icon
        icon={icon}
        width={width}
        height={height}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    )

  if (!value?.icon) return null

  const {
    metadata: {hFlip, vFlip, rotate, color, size},
  } = value

  return (
    <Flex direction='column' align='center' justify='center' gap={2}>
      <Icon
        icon={value.icon}
        {...((hFlip || vFlip) && {flip: getFlipValue(hFlip, vFlip)})}
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
