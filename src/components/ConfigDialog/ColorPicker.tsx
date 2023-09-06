/* eslint-disable react/jsx-no-bind */
import {Flex, Text, TextInput} from '@sanity/ui'
import {FormEvent} from 'react'
import {RgbaColorPicker} from 'react-colorful'
import useClickOutside from '../../hooks/useClickOutside'
import {useAppStoreContext} from '../../store/context'
import ColorPalette from './ColorPalette'
import {StyledColorPicker} from './Styled'

interface ColorPickerProps {
  onClickOutsideHandler: () => void
}

const ColorPicker = ({onClickOutsideHandler}: ColorPickerProps) => {
  const pickerRef = useClickOutside<HTMLDivElement>(onClickOutsideHandler)
  const color = useAppStoreContext((s) => s.color)
  const setColor = useAppStoreContext((s) => s.setColor)

  const handleHexInput = (event: FormEvent<HTMLInputElement>) => {
    setColor(event.currentTarget.value)
  }

  const handleRgbaInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.dataset.input as string
    const value = Number(event.currentTarget.value)
    setColor({...color?.rgba!, [input]: value})
  }
  return (
    <StyledColorPicker ref={pickerRef} padding={4}>
      <RgbaColorPicker {...(color?.rgba && {color: color.rgba})} onChange={setColor} />
      <ColorPalette />
      <Flex gap={1} align='center'>
        <Text weight='bold' size={1} style={{width: '50px'}}>
          HEX
        </Text>
        <TextInput
          value={color?.hex || ''}
          fontSize={1}
          style={{padding: '2px 1px', width: '85px', textAlign: 'center'}}
          onChange={handleHexInput}
        />
      </Flex>
      <Flex gap={1} align='center' marginTop={2}>
        <Text weight='bold' size={1} style={{width: '50px'}}>
          RGBA
        </Text>
        <TextInput
          type='number'
          min={0}
          max={255}
          value={color?.rgba.r === undefined ? '' : color.rgba.r}
          data-input='r'
          fontSize={1}
          style={{padding: '2px 1px 2px 5px', width: '50px'}}
          onChange={handleRgbaInput}
        />
        <TextInput
          type='number'
          min={0}
          max={255}
          value={color?.rgba.g === undefined ? '' : color.rgba.g}
          data-input='g'
          fontSize={1}
          style={{padding: '2px 1px 2px 5px', width: '50px'}}
          onChange={handleRgbaInput}
        />
        <TextInput
          type='number'
          min={0}
          max={255}
          value={color?.rgba.b === undefined ? '' : color.rgba.b}
          data-input='b'
          fontSize={1}
          style={{padding: '2px 1px 2px 5px', width: '50px'}}
          onChange={handleRgbaInput}
        />
        <TextInput
          type='number'
          min={0}
          max={1}
          value={color?.rgba.a === undefined ? '' : color.rgba.a}
          data-input='a'
          fontSize={1}
          step={0.01}
          style={{padding: '2px 1px 2px 5px', width: '50px'}}
          onChange={handleRgbaInput}
        />
      </Flex>
    </StyledColorPicker>
  )
}

export default ColorPicker
