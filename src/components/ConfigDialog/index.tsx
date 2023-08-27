import {Icon} from '@iconify-icon/react'
import {CogIcon} from '@sanity/icons'
import {Card, Dialog, Flex, Grid, TextInput, useTheme} from '@sanity/ui'
import useConfigurationState from '../../hooks/useConfigurationState'
import {useAppStore} from '../../store'
import BorderIcon from '../icons/BorderIcon'
import HeightIcon from '../icons/HeightIcon'
import LinkIcon from '../icons/LinkIcon'
import Rotate180 from '../icons/Rotate180'
import Rotate270 from '../icons/Rotate270'
import Rotate90 from '../icons/Rotate90'
import WidthIcon from '../icons/WidthIcon'
import {StyledBaseButton, StyledGridForm} from '../shared/SharedStyledComponents'
import {StyledHeading} from './Styled'

const DialogHeader = () => (
  <Flex align='center' gap={3}>
    <CogIcon />
    <span>Configuration</span>
  </Flex>
)

interface ConfigDialogProps {}

const ConfigDialog = (props: ConfigDialogProps) => {
  const {sanity} = useTheme()
  const isConfigDialogOpen = useAppStore((s) => s.isConfigDialogOpen)
  const openConfigDialog = useAppStore((s) => s.openConfigDialog)
  const closeConfigDialog = useAppStore((s) => s.closeConfigDialog)
  const {
    icon,
    flipH,
    flipV,
    flip,
    rotate,
    size,
    onClickFlipH,
    onClickFlipV,
    onChangeRotate,
    onChangeWidth,
    onChangeHeight,
  } = useConfigurationState()

  return (
    <>
      <StyledBaseButton
        mode='bleed'
        tone='positive'
        icon={<CogIcon width={18} />}
        onClick={openConfigDialog}
        fontSize={1}
        text='Config'
        padding={2}
      />
      {isConfigDialogOpen && (
        <Dialog id='config-dialog' header={<DialogHeader />} onClose={closeConfigDialog} width={1}>
          <StyledGridForm margin={4} marginX={8} columns={[1, 2]} gapY={[2, 3]}>
            <StyledHeading>Flip:</StyledHeading>
            <Flex gap={2}>
              <StyledBaseButton
                icon={<WidthIcon width={15} height={15} />}
                title='Horizontal'
                mode={`${flipH ? 'default' : 'ghost'}`}
                tone='primary'
                fontSize={1}
                padding={2}
                onClick={onClickFlipH}
                style={{width: '100%'}}
              />
              <StyledBaseButton
                icon={<HeightIcon width={15} height={15} />}
                title='Vertical'
                mode={`${flipV ? 'default' : 'ghost'}`}
                tone='primary'
                fontSize={1}
                padding={2}
                onClick={onClickFlipV}
                style={{width: '100%'}}
              />
            </Flex>
            <StyledHeading>Rotate:</StyledHeading>
            <Grid columns={[4, 2]} gap={2}>
              <StyledBaseButton
                text='0°'
                mode={`${rotate === 0 ? 'default' : 'ghost'}`}
                tone='primary'
                fontSize={0}
                padding={2}
                paddingX={0}
                style={{flex: 1}}
                data-value={0}
                onClick={onChangeRotate}
              />
              <StyledBaseButton
                icon={<Rotate90 width={15} height={15} />}
                text='90°'
                mode={`${rotate === 1 ? 'default' : 'ghost'}`}
                tone='primary'
                fontSize={0}
                padding={2}
                paddingX={0}
                style={{flex: 1}}
                data-value={1}
                onClick={onChangeRotate}
              />
              <StyledBaseButton
                icon={<Rotate180 width={15} height={15} />}
                text='180°'
                mode={`${rotate === 2 ? 'default' : 'ghost'}`}
                tone='primary'
                fontSize={0}
                padding={2}
                paddingX={0}
                style={{flex: 1}}
                data-value={2}
                onClick={onChangeRotate}
              />
              <StyledBaseButton
                icon={<Rotate270 width={15} height={15} />}
                text='270°'
                mode={`${rotate === 3 ? 'default' : 'ghost'}`}
                tone='primary'
                fontSize={0}
                padding={2}
                paddingX={0}
                style={{flex: 1}}
                data-value={3}
                onClick={onChangeRotate}
              />
            </Grid>
            <StyledHeading>Size:</StyledHeading>
            <Flex direction={['row']} align='center' gap={1}>
              <WidthIcon
                width={35}
                height={35}
                color={sanity.color.button.ghost.primary.enabled.fg}
              />
              <TextInput
                type='number'
                name='width'
                min={0}
                value={size?.width}
                padding={2}
                style={{paddingInline: '4px'}}
                fontSize={0}
                onChange={onChangeWidth}
              />
              <HeightIcon
                width={35}
                height={35}
                color={sanity.color.button.ghost.primary.enabled.fg}
              />
              <TextInput
                type='number'
                name='height'
                min={0}
                value={size?.height}
                padding={2}
                style={{paddingInline: '4px'}}
                fontSize={0}
                onChange={onChangeHeight}
              />
              <StyledBaseButton mode='ghost' tone='primary' style={{padding: '6px'}} padding={0}>
                {/* <UnlinkIcon width={11} height={11} style={{display: 'block'}} /> */}
                <LinkIcon width={11} height={11} style={{display: 'block'}} />
              </StyledBaseButton>

              <StyledBaseButton mode='ghost' tone='primary' style={{padding: '6px'}} padding={0}>
                <BorderIcon width={11} height={11} style={{display: 'block'}} />
              </StyledBaseButton>
            </Flex>
          </StyledGridForm>
          {icon && (
            <Flex align='center' justify='center' paddingY={5} paddingX={2}>
              <Card border>
                <Icon
                  icon={icon}
                  flip={flip}
                  rotate={rotate}
                  width={size.width <= 300 ? size.width : 300}
                  height={size.height <= 300 ? size.height : 300}
                  style={{display: 'block'}}
                />
              </Card>
            </Flex>
          )}
        </Dialog>
      )}
    </>
  )
}

export default ConfigDialog
