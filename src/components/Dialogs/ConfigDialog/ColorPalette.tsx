/* eslint-disable react/jsx-no-bind */
import {ReactNode} from 'react'

import {useAppStoreContext} from '../../../store/context'
import {StyledColorPaletteBox, StyledColorPaletteWrapper} from '../../../style'
import BaseTooltip from '../../BaseTooltip'

const ColorPalette = (): ReactNode => {
  const customPalette = useAppStoreContext((s) => s.customPalette)
  const setColor = useAppStoreContext((s) => s.setColor)

  if (!customPalette) return null

  return (
    <StyledColorPaletteWrapper>
      {customPalette.map((currColor) => (
        <BaseTooltip
          key={currColor.hex}
          content={currColor.title}
          fallbackPlacements={['right', 'left']}
          placement='top'
          portal
        >
          <StyledColorPaletteBox
            key={currColor.hex}
            $bgColor={currColor.hex}
            onClick={() => setColor(currColor.hex)}
          />
        </BaseTooltip>
      ))}
    </StyledColorPaletteWrapper>
  )
}

export default ColorPalette
