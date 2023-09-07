/* eslint-disable react/jsx-no-bind */
import {Flex, Grid, Switch} from '@sanity/ui'
import useSvgUtils from '../../../hooks/useSvgUtils'
import {useAppStoreContext} from '../../../store/context'
import {StyledHeading} from './Styled'

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
      <StyledHeading>Inline Svg:</StyledHeading>
      <Grid gap={1} style={{width: '100%'}}>
        <Switch checked={!!inlineSvg} onChange={onChangeInlineSvg} />
      </Grid>
    </Flex>
  )
}

export default InlineSvg
