/* eslint-disable react/jsx-no-bind */
import {Box, Text, Tooltip} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'
import {StyledColorPaletteBox, StyledColorPaletteWrapper} from '../../../style'

interface ColorPaletteProps {}

const ColorPalette = (props: ColorPaletteProps) => {
  const customPalette = useAppStoreContext((s) => s.customPalette)
  const setColor = useAppStoreContext((s) => s.setColor)

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
            style={{backgroundColor: currColor.hex}}
            onClick={() => setColor(currColor.hex)}
          />
        </Tooltip>
      ))}
    </StyledColorPaletteWrapper>
  )
}

export default ColorPalette
