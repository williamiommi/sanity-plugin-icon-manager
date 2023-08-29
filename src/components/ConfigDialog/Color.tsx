/* eslint-disable react/jsx-no-bind */
import {Flex, Grid, Popover} from '@sanity/ui'
import {useState} from 'react'
import {useAppStore} from '../../store'
import ColorBucketIcon from '../icons/ColorBucketIcon'
import {StyledBaseButton, StyledIconButton} from '../shared/SharedStyledComponents'
import ColorPicker from './ColorPicker'
import {StyledHeading} from './Styled'

const Color = () => {
  const sanityValue = useAppStore((s) => s.sanityValue)
  const color = useAppStore((s) => s.color)
  const clearColor = useAppStore((s) => s.clearColor)
  const [isColorOpen, setIsColorOpen] = useState(false)

  if (!sanityValue || sanityValue.metadata.palette) return null

  return (
    <Flex
      direction={['column', 'column', 'row']}
      gap={[2, 2, 1]}
      align={['flex-start', 'flex-start', 'center']}
      style={{width: '100%'}}
    >
      <StyledHeading>Color:</StyledHeading>
      <Grid columns={1} style={{width: '100%'}}>
        <Flex gap={1} align='center'>
          <div
            style={{
              width: '40px',
              height: '24px',
              backgroundColor: color?.hex || 'currentColor',
            }}
          >
            &nbsp;
          </div>
          <Popover
            placement='top'
            fallbackPlacements={['right', 'left']}
            portal
            content={<ColorPicker onClickOutsideHandler={() => setIsColorOpen(false)} />}
            open={isColorOpen}
          >
            <StyledIconButton
              mode={isColorOpen ? 'default' : 'ghost'}
              onClick={() => setIsColorOpen(!isColorOpen)}
              padding='2px'
            >
              <ColorBucketIcon width={18} height={18} />
            </StyledIconButton>
          </Popover>
          <StyledBaseButton
            text='Clear color'
            mode='bleed'
            tone='primary'
            title='Set the color to "currentColor"'
            fontSize={0}
            padding={1}
            onClick={clearColor}
          />
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Color
