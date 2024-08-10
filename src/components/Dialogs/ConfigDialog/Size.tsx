import {Button, Flex, Text} from '@sanity/ui'

import usePluginTranslation from '../../../hooks/usePluginTranslation'
import {useAppStoreContext} from '../../../store/context'
import BaseTooltip from '../../BaseTooltip'
import BorderIcon from '../../icons/BorderIcon'
import LinkIcon from '../../icons/LinkIcon'
import UnlinkIcon from '../../icons/UnlinkIcon'
import InputSize from '../../InputSize'

const Size = () => {
  const {t} = usePluginTranslation()
  const size = useAppStoreContext((s) => s.size)
  const keepAspectRatio = useAppStoreContext((s) => s.keepAspectRatio)
  const previewBorder = useAppStoreContext((s) => s.previewBorder)
  const updateSize = useAppStoreContext((s) => s.updateSize)
  const toggleKeepAspectRatio = useAppStoreContext((s) => s.toggleKeepAspectRatio)
  const togglePreviewBorder = useAppStoreContext((s) => s.togglePreviewBorder)

  return (
    <Flex
      direction={['column', 'column', 'row']}
      gap={[2, 2, 1]}
      align={['flex-start', 'flex-start', 'center']}
      style={{width: '100%'}}
    >
      <Text weight='bold' size={1} style={{width: '100px'}}>
        {t('dialog.configure.filter.size.label')}
      </Text>
      <Flex gap={1} align='center' style={{width: '100%'}}>
        <InputSize initialSize={size} keepAspectRatio={keepAspectRatio} updateSize={updateSize} />
        <BaseTooltip content={t('dialog.configure.filter.lock.aspect.ratio.tooltip')}>
          <Button
            tone='primary'
            mode={keepAspectRatio ? 'default' : 'ghost'}
            icon={
              keepAspectRatio ? (
                <LinkIcon width={14} height={14} />
              ) : (
                <UnlinkIcon width={14} height={14} />
              )
            }
            fontSize={1}
            padding={2}
            style={{width: '25px', cursor: 'pointer'}}
            onClick={toggleKeepAspectRatio}
          />
        </BaseTooltip>
        <BaseTooltip content={t('dialog.configure.filter.real.size.tooltip')}>
          <Button
            tone='primary'
            mode={previewBorder ? 'default' : 'ghost'}
            icon={<BorderIcon width={14} height={14} />}
            fontSize={1}
            padding={2}
            style={{width: '25px', cursor: 'pointer'}}
            onClick={togglePreviewBorder}
          />
        </BaseTooltip>
      </Flex>
    </Flex>
  )
}

export default Size
