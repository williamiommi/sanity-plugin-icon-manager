import {RgbaColor} from 'react-colorful'

const round = (number: number, digits = 0, base = Math.pow(10, digits)): number => {
  return Math.round(base * number) / base
}

const format = (number: number) => {
  const hex = number.toString(16)
  return hex.length < 2 ? `0${hex}` : hex
}

export const rgbaToHex = ({r, g, b, a}: RgbaColor): string => {
  const alphaHex = a < 1 ? format(round(a * 255)) : ''
  return `#${format(r)}${format(g)}${format(b)}${alphaHex}`
}
