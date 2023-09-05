/* eslint-disable react/jsx-no-bind */
import {Box, Text, Tooltip} from '@sanity/ui'
import {useAppStore} from '../../store'
import {StyledColorPaletteBox, StyledColorPaletteWrapper} from './Styled'

interface ColorPaletteProps {}

const ColorPalette = (props: ColorPaletteProps) => {
  const customPalette = useAppStore((s) => s.customPalette)
  const setColor = useAppStore((s) => s.setColor)

  if (!customPalette) return null

  return (
    <StyledColorPaletteWrapper>
      {customPalette.map((currColor) => (
        <Tooltip
          key={currColor.hex}
          content={
            <Box padding={2}>
              <Text muted size={0}>
                {currColor.title}
              </Text>
            </Box>
          }
          fallbackPlacements={['right', 'left']}
          placement='top'
          portal
        >
          <StyledColorPaletteBox
            key={currColor.hex}
            bgColor={currColor.hex}
            title={currColor.title}
            onClick={() => setColor(currColor.hex)}
          />
        </Tooltip>
      ))}
    </StyledColorPaletteWrapper>
  )
}

export default ColorPalette
