/* eslint-disable react/jsx-no-bind */
import {Flex, Grid, Popover, useClickOutside} from '@sanity/ui'
import {useRef, useState} from 'react'
import {useAppStore} from '../../store'
import ColorBucketIcon from '../icons/ColorBucketIcon'
import {StyledBaseButton} from '../shared/SharedStyledComponents'
import ColorPicker from './ColorPicker'
import {StyledHeading} from './Styled'

const Color = () => {
  const sanityValue = useAppStore((s) => s.sanityValue)
  const color = useAppStore((s) => s.color)
  const [isColorOpen, setIsColorOpen] = useState(false)
  const buttonRef = useRef(null)
  const pickerRef = useRef(null)
  useClickOutside(() => setIsColorOpen(false), [buttonRef.current, pickerRef.current])

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
            portal
            content={<ColorPicker ref={pickerRef} />}
            open={isColorOpen}
          >
            <StyledBaseButton
              ref={buttonRef}
              mode='ghost'
              tone='primary'
              icon={
                <ColorBucketIcon
                  width={22}
                  height={22}
                  style={{display: 'block', paddingBottom: '2px'}}
                />
              }
              style={{width: '25px', height: '25px'}}
              onClick={() => setIsColorOpen(!isColorOpen)}
            />
          </Popover>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Color
