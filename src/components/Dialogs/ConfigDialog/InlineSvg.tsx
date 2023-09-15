/* eslint-disable react/jsx-no-bind */
import {Flex, Switch, Text} from '@sanity/ui'
import useSvgUtils from '../../../hooks/useSvgUtils'
import {useAppStoreContext} from '../../../store/context'

const InlineSvg = () => {
  const {onGenerateSvgHtml} = useSvgUtils()
  const state = useAppStoreContext((s) => s)
  const {inlineSvg, setInlineSvg} = state

  const onChangeInlineSvg = async () => {
    setInlineSvg(inlineSvg ? undefined : await onGenerateSvgHtml())
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
