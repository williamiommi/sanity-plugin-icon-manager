import {Icon} from '@iconify/react'
import {InfoOutlineIcon} from '@sanity/icons'
import {Card, Flex, Text, Tooltip, useTheme} from '@sanity/ui'
import {useMemo} from 'react'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../../lib/constants'
import {useAppStoreContext} from '../../../store/context'

const PREVIEW_SIZE_LIMIT = 300

const Preview = () => {
  const {t} = useTranslation(I18N_NAMESPACE)
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
      <Tooltip
        content={
          <Text size={0} style={{padding: '5px'}}>
            {t('dialog.configure.filter.preview.tooltip')}
          </Text>
        }
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
      </Tooltip>

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

export default Preview
