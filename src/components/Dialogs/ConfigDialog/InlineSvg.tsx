/* eslint-disable react/jsx-no-bind */
import {Flex, Switch, Text} from '@sanity/ui'

import usePluginTranslation from '../../../hooks/usePluginTranslation'
import {buildSvgHtml} from '../../../lib/svg-utils'
import {toastError} from '../../../lib/toast-utils'
import {useAppStoreContext} from '../../../store/context'

const InlineSvg = () => {
  const {t} = usePluginTranslation()
  const {
    sanityValue,
    hFlip,
    vFlip,
    flip,
    rotate,
    size,
    color,
    inlineSvg,
    setInlineSvg,
    sanityToast,
  } = useAppStoreContext((s) => s)

  const onChangeInlineSvg = async () => {
    try {
      setInlineSvg(
        inlineSvg
          ? undefined
          : await buildSvgHtml({icon: sanityValue?.icon!, size, hFlip, vFlip, flip, rotate, color}),
      )
    } catch (e: unknown) {
      toastError(sanityToast, e)
    }
  }

  return (
    <Flex
      direction={['column', 'column', 'row']}
      gap={[2, 2, 1]}
      align={['flex-start', 'flex-start', 'center']}
      style={{width: '100%'}}
    >
      <Text weight='bold' size={1} style={{width: '100px'}}>
        {t('dialog.configure.filter.inline.svg.label')}
      </Text>
      <Flex style={{width: '100%'}}>
        <Switch checked={!!inlineSvg} onChange={onChangeInlineSvg} />
      </Flex>
    </Flex>
  )
}

export default InlineSvg
