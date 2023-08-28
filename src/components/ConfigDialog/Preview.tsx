import {Icon} from '@iconify-icon/react'
import {InfoOutlineIcon} from '@sanity/icons'
import {Card, Flex, Text, Tooltip, useTheme} from '@sanity/ui'
import {useMemo} from 'react'
import {useAppStore} from '../../store'

const PREVIEW_SIZE_LIMIT = 300

const Preview = () => {
  const theme = useTheme()
  const sanityValue = useAppStore((s) => s.sanityValue)
  const previewBorder = useAppStore((s) => s.previewBorder)
  const flip = useAppStore((s) => s.getFlipValue())
  const rotate = useAppStore((s) => s.rotate)
  const size = useAppStore((s) => s.size)
  const infoWarning = useMemo(
    () => size.width > PREVIEW_SIZE_LIMIT || size.height > PREVIEW_SIZE_LIMIT,
    [size.width, size.height],
  )

  if (!sanityValue) return null

  return (
    <Card marginTop={5}>
      <Tooltip
        content={
          <Text size={0} style={{padding: '5px'}}>
            Preview limited to 300x300, but your custom size is always stored.
          </Text>
        }
        fallbackPlacements={['right', 'left']}
        placement='top'
        portal
      >
        <Text size={1} weight='bold' style={{display: 'inline-flex', alignItems: 'center'}}>
          <InfoOutlineIcon
            color={infoWarning ? theme.sanity.color.solid.critical.enabled.bg : 'currentColor'}
          />
          &nbsp;&nbsp;Preview:
        </Text>
      </Tooltip>

      <Flex align='center' justify='center' paddingY={5} paddingX={2}>
        <Card
          tone={previewBorder ? 'positive' : 'default'}
          style={{transition: 'all .3s ease-in-out', overflow: 'hidden'}}
        >
          <Icon
            icon={sanityValue.icon}
            flip={flip}
            rotate={rotate}
            width={size.width <= PREVIEW_SIZE_LIMIT ? size.width : PREVIEW_SIZE_LIMIT}
            height={size.height <= PREVIEW_SIZE_LIMIT ? size.height : PREVIEW_SIZE_LIMIT}
            style={{display: 'block'}}
          />
        </Card>
      </Flex>
    </Card>
  )
}

export default Preview
