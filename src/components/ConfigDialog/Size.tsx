import {Flex, Grid, useTheme} from '@sanity/ui'
import {useAppStore} from '../../store'
import BorderIcon from '../icons/BorderIcon'
import HeightIcon from '../icons/HeightIcon'
import LinkIcon from '../icons/LinkIcon'
import UnlinkIcon from '../icons/UnlinkIcon'
import WidthIcon from '../icons/WidthIcon'
import {StyledBaseButton} from '../shared/SharedStyledComponents'
import {StyledHeading, StyledSizeInput} from './Styled'

const Size = () => {
  const {sanity: theme} = useTheme()
  const size = useAppStore((s) => s.size)
  const uniqueSize = useAppStore((s) => s.uniqueSize)
  const previewBorder = useAppStore((s) => s.previewBorder)
  const setWidth = useAppStore((s) => s.setWidth)
  const setHeight = useAppStore((s) => s.setHeight)
  const toggleUniqueSize = useAppStore((s) => s.toggleUniqueSize)
  const togglePreviewBorder = useAppStore((s) => s.togglePreviewBorder)

  return (
    <Flex
      direction={['column', 'column', 'row']}
      gap={[2, 2, 1]}
      align={['flex-start', 'flex-start', 'center']}
      style={{width: '100%'}}
    >
      <StyledHeading>Size:</StyledHeading>
      <Grid columns={1} gap={1} style={{width: '100%'}}>
        <Flex align='center' gap={1}>
          <WidthIcon
            width={18}
            height='100%'
            color={theme.color.button.ghost.primary.enabled.fg}
            style={{minWidth: '18px'}}
          />
          <StyledSizeInput type='number' min={0} value={size.width} onChange={setWidth} />
          <HeightIcon
            width={18}
            height='100%'
            color={theme.color.button.ghost.primary.enabled.fg}
            style={{minWidth: '18px'}}
          />
          <StyledSizeInput type='number' min={0} value={size.height} onChange={setHeight} />
          <StyledBaseButton
            icon={
              uniqueSize ? (
                <LinkIcon width={11} height={11} style={{display: 'block'}} />
              ) : (
                <UnlinkIcon width={11} height={11} style={{display: 'block'}} />
              )
            }
            mode={uniqueSize ? 'default' : 'ghost'}
            tone='primary'
            style={{width: '24px', minWidth: '24px', height: '100%'}}
            padding={1}
            onClick={toggleUniqueSize}
          />
          <StyledBaseButton
            icon={<BorderIcon width={11} height={11} style={{display: 'block'}} />}
            mode={previewBorder ? 'default' : 'ghost'}
            tone='primary'
            style={{width: '24px', minWidth: '24px', height: '100%'}}
            padding={1}
            onClick={togglePreviewBorder}
          />
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Size
