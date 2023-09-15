/* eslint-disable react/jsx-no-bind */
import {Button, Flex, Grid, Popover, Text} from '@sanity/ui'
import {useState} from 'react'
import {useAppStoreContext} from '../../../store/context'
import ColorPicker from './ColorPicker'

const Color = () => {
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const color = useAppStoreContext((s) => s.color)
  const clearColor = useAppStoreContext((s) => s.clearColor)
  const [isColorOpen, setIsColorOpen] = useState(false)

  if (!sanityValue || sanityValue.metadata.palette) return null

  return (
    <Flex
      direction={['column', 'column', 'row']}
      gap={[2, 2, 1]}
      align={['flex-start', 'flex-start', 'center']}
      style={{width: '100%'}}
    >
      <Text weight='bold' size={1} style={{width: '100px'}}>
        Color:
      </Text>
      <Grid columns={1} style={{width: '100%'}}>
        <Flex gap={1} align='center'>
          <Popover
            placement='top'
            fallbackPlacements={['right', 'left']}
            portal
            content={<ColorPicker onClickOutsideHandler={() => setIsColorOpen(false)} />}
            open={isColorOpen}
          >
            <button
              type='button'
              style={{
                width: '40px',
                height: '20px',
                backgroundColor: color?.hex || 'currentColor',
                cursor: 'pointer',
                border: 'none',
                borderRadius: '3px',
              }}
              onClick={() => setIsColorOpen(!isColorOpen)}
            />
          </Popover>
          {color && (
            <Button
              text='Clear color'
              mode='bleed'
              tone='primary'
              title='Set the color to "currentColor"'
              fontSize={0}
              padding={1}
              style={{cursor: 'pointer'}}
              onClick={clearColor}
            />
          )}
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Color
