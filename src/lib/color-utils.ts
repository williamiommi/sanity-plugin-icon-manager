import {stringToColor} from '@iconify/utils'
import {RGBColor} from '@iconify/utils/lib/colors/types'
import {RgbaColor} from 'react-colorful'

export const HEX_BLACK = '#000000'

const round = (number: number, digits = 0, base = Math.pow(10, digits)): number => {
  return Math.round(base * number) / base
}

const format = (number: number) => {
  const hex = number.toString(16)
  return hex.length < 2 ? `0${hex}` : hex
}

export const rgbaToHex = ({r, g, b, a}: RgbaColor): string => {
  if (r === undefined || g === undefined || b === undefined || a === undefined) return ''
  const alphaHex = a < 1 ? format(round(a * 255)) : ''
  return `#${format(r)}${format(g)}${format(b)}${alphaHex}`
}

export const hexToRgba = (hex: string): RgbaColor => {
  const color = stringToColor(hex) as RGBColor
  if (color) return {r: color.r, g: color.g, b: color.b, a: color.alpha}
  return {r: 0, g: 0, b: 0, a: 1}
}

export const isValidHex = (hex: string): boolean => {
  return !!stringToColor(hex)
}

export const forceHex = (value: string, hasAlpha = false): string => {
  return value.replace(/([^0-9A-F]+)/gi, '').substring(0, hasAlpha ? 8 : 6)
}
