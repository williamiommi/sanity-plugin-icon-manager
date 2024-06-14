/* eslint-disable react/jsx-no-bind */
import {Flex, Switch, Text} from '@sanity/ui'
import useSvgUtils from '../../../hooks/useSvgUtils'
import {toastError} from '../../../lib/toastUtils'
import {useAppStoreContext} from '../../../store/context'

const InlineSvg = () => {
  const {onGenerateSvgHtml} = useSvgUtils()
  const sanityToast = useAppStoreContext((s) => s.sanityToast)
  const inlineSvg = useAppStoreContext((s) => s.inlineSvg)
  const setInlineSvg = useAppStoreContext((s) => s.setInlineSvg)

  const onChangeInlineSvg = async () => {
    try {
      setInlineSvg(inlineSvg ? undefined : await onGenerateSvgHtml())
    } catch (e: any) {
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
        Inline Svg:
      </Text>
      <Flex style={{width: '100%'}}>
        <Switch checked={!!inlineSvg} onChange={onChangeInlineSvg} />
      </Flex>
    </Flex>
  )
}

export default InlineSvg
