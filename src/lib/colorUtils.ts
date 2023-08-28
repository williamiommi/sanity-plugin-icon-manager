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
  if (r === undefined || g === undefined || b === undefined || a === undefined) return '#000000'
  const alphaHex = a < 1 ? format(round(a * 255)) : ''
  return `#${format(r)}${format(g)}${format(b)}${alphaHex}`
}

export const hexToRgba = (hex: string): RgbaColor => {
  const reg = /^#{0,1}[0-9A-F]{6}[0-9a-f]{0,2}$/i
  if (!hex || !reg.test(hex)) return {r: 0, g: 0, b: 0, a: 1}

  if (hex[0] === '#') hex = hex.substring(1)

  if (hex.length < 6) {
    return {
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
      a: hex.length === 4 ? round(parseInt(hex[3] + hex[3], 16) / 255, 2) : 1,
    }
  }

  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
    a: hex.length === 8 ? round(parseInt(hex.substring(6, 8), 16) / 255, 2) : 1,
  }
}
