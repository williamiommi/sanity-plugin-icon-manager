import {StateCreator} from 'zustand'
import {isValidHex} from '../../lib/color-utils'
import {PluginCustomColor, PluginCustomPalette} from '../../types/IconManagerPluginOptions'
import {IconManagerSize} from '../../types/IconManagerType'

export interface PluginOptionsSlice {
  defaultSize?: IconManagerSize
  availableCollectionsOption?: string
  inlineSvgOption?: boolean
  iconifyEndpoint?: string
  customPalette?: PluginCustomColor[]
  setDefaultSize: (defaultSize: IconManagerSize) => void
  setIconifyEndpoint: (iconifyEndpoint: string) => void
  setPluginOptionCustomPalette: (customPalette: PluginCustomPalette) => void
  setInlineSvgOption: (inlineSvg: boolean) => void
  setAvailableCollectionsOption: (availableCollectionsOption: string[]) => void
}

export const createPluginOptionsSlice: StateCreator<
  PluginOptionsSlice,
  [],
  [],
  PluginOptionsSlice
> = (set) => ({
  setDefaultSize: (defaultSize: IconManagerSize) => set(() => ({defaultSize})),
  setIconifyEndpoint: (iconifyEndpoint: string) => set(() => ({iconifyEndpoint})),
  setPluginOptionCustomPalette: (customPalette: PluginCustomPalette) => {
    if (!customPalette) return // do nothing
    const paletteSet = new Set()

    const finalPalette = customPalette.reduce((acc: PluginCustomColor[], curr) => {
      const currIsString = typeof curr === 'string'
      const hex = currIsString ? curr : curr.hex
      if (!isValidHex(hex)) return acc

      if (!paletteSet.has(hex)) {
        paletteSet.add(hex)
        acc.push({hex, title: currIsString ? hex : curr?.title || hex})
      }
      return acc
    }, [])

    set(() => ({customPalette: finalPalette}))
  },
  setInlineSvgOption: (inlineSvgOption: boolean) => set(() => ({inlineSvgOption})),
  setAvailableCollectionsOption: (availableCollectionsOption: string[]) =>
    set(() => ({availableCollectionsOption: availableCollectionsOption.join(',')})),
})
