import {colorToString, stringToColor} from '@iconify/utils'
import {RGBColor} from '@iconify/utils/lib/colors/types'
import {RgbaColor} from 'react-colorful'

export const HEX_BLACK = '#000000'

export const rgbaToHex = ({r, g, b, a}: RgbaColor): string => {
  const color = colorToString({type: 'rgb', r, g, b, alpha: a})
  return color || ''
}

export const hexToRgba = (hex: string): RgbaColor => {
  const color = stringToColor(hex) as RGBColor
  if (color) return {r: color.r, g: color.g, b: color.b, a: color.alpha}
  return {r: 0, g: 0, b: 0, a: 1}
}
