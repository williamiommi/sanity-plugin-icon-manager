/* eslint-disable react/jsx-no-bind */
import {Flex, Grid, Switch} from '@sanity/ui'
import {generateSvgHtml} from '../../lib/svgUtils'
import {useAppStore} from '../../store'
import {StyledHeading} from './Styled'

const InlineSvg = () => {
  const inlineSvg = useAppStore((s) => s.inlineSvg)
  const setInlineSvg = useAppStore((s) => s.setInlineSvg)

  const onChangeInlineSvg = async () => {
    setInlineSvg(inlineSvg ? undefined : await generateSvgHtml())
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
