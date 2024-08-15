import {Icon} from '@iconify/react'
import {InfoOutlineIcon} from '@sanity/icons'
import {Card, Flex, Text, useTheme} from '@sanity/ui'
import {ReactNode, useMemo} from 'react'

import usePluginTranslation from '../../../hooks/usePluginTranslation'
import {useAppStoreContext} from '../../../store/context'
import BaseTooltip from '../../BaseTooltip'

const PREVIEW_SIZE_LIMIT = 300

export default function Preview(): ReactNode {
  const {t} = usePluginTranslation()
  const theme = useTheme()
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const previewBorder = useAppStoreContext((s) => s.previewBorder)
  const flip = useAppStoreContext((s) => s.flip)
  const rotate = useAppStoreContext((s) => s.rotate)
  const size = useAppStoreContext((s) => s.size)
  const color = useAppStoreContext((s) => s.color)
  const infoWarning = useMemo(
    () => size.width > PREVIEW_SIZE_LIMIT || size.height > PREVIEW_SIZE_LIMIT,
    [size.width, size.height],
  )

  if (!sanityValue) return null

  return (
    <Card marginTop={5}>
      <BaseTooltip
        content={t('dialog.configure.filter.preview.tooltip')}
        fallbackPlacements={['right', 'left']}
        placement='top'
        portal
      >
        <Text
          size={1}
          weight='bold'
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: infoWarning ? theme.sanity.color.solid.critical.enabled.bg : 'currentColor',
          }}
        >
          <InfoOutlineIcon />
          &nbsp;&nbsp;{t('dialog.configure.filter.preview.label')}
        </Text>
      </BaseTooltip>

      <Flex align='center' justify='center' paddingY={5} paddingX={2}>
        <Card
          tone={previewBorder ? 'positive' : 'default'}
          border
          style={{overflow: 'hidden', borderColor: 'transparent'}}
        >
          <Icon
            icon={sanityValue.icon}
            flip={flip}
            rotate={rotate}
            width={size.width <= PREVIEW_SIZE_LIMIT ? size.width : PREVIEW_SIZE_LIMIT}
            height={size.height <= PREVIEW_SIZE_LIMIT ? size.height : PREVIEW_SIZE_LIMIT}
            style={{display: 'block', ...(color?.hex && {color: color.hex})}}
          />
        </Card>
      </Flex>
    </Card>
  )
}
