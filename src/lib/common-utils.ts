import {IconManagerSize} from '../types/IconManagerType'

const isValidSize = (number: unknown): boolean =>
  typeof number === 'number' && Number.isInteger(number) && number > 0

export const parseDefaultSize = (defaultSize?: IconManagerSize): IconManagerSize | undefined => {
  if (defaultSize && isValidSize(defaultSize.width) && isValidSize(defaultSize.height))
    return defaultSize

  return undefined
}
