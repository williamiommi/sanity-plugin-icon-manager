import {Icon} from '@iconify-icon/react'
import {Flex, Text} from '@sanity/ui'
import {getFlipValue} from '../../store/ConfigureSlice'
import IconifyType from '../../types/IconifyType'

interface IconPreviewProps {
  value: IconifyType
}

const IconPreview = ({value}: IconPreviewProps) => {
  const {
    icon,
    metadata: {flipH, flipV, rotate, color, size},
  } = value

  if (!value.icon) return null

  return (
    <Flex direction='column' align='center' gap={2}>
      <Icon
        icon={icon}
        {...((flipH || flipV) && {flip: getFlipValue(flipH, flipV)})}
        {...(rotate && {rotate})}
        style={{display: 'block', ...(color && color.hex && {color: color.hex})}}
        width={50}
        height={50}
      />
      <Text size={0} style={{opacity: 0.8}}>
        {size.width} x {size.height}
      </Text>
    </Flex>
  )
}

export default IconPreview
