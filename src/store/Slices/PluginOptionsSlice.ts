import {StateCreator} from 'zustand'
import {isValidHex} from '../../lib/colorUtils'
import {PluginCustomColor, PluginCustomPalette} from '../../types/IconManagerPluginOptions'

export interface PluginOptionsSlice {
  inlineSvgOption?: boolean
  iconifyEndpoint?: string
  customPalette?: PluginCustomColor[]
  setIconifyEndpoint: (iconifyEndpoint: string) => void
  setPluginOptionCustomPalette: (customPalette: PluginCustomPalette) => void
  setInlineSvgOption: (inlineSvg: boolean) => void
}

export const createPluginOptionsSlice: StateCreator<
  PluginOptionsSlice,
  [],
  [],
  PluginOptionsSlice
> = (set) => ({
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
})
