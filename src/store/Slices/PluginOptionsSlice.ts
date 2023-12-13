import {StateCreator} from 'zustand'
import {isValidHex} from '../../lib/colorUtils'
import {PluginCustomColor, PluginCustomPalette} from '../../types/IconManagerPluginOptions'

export interface PluginOptionsSlice {
  iconifyEndpoint?: string
  customPalette?: PluginCustomColor[]
  storeInlineSvg?: boolean
  setIconifyEndpoint: (iconifyEndpoint: string) => void
  setPluginOptionCustomPalette: (customPalette: PluginCustomPalette) => void
  setPluginOptionStoreInlineSvg: (storeInlineSvg: boolean) => void
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
  setPluginOptionStoreInlineSvg: (storeInlineSvg: boolean) => set(() => ({storeInlineSvg})),
})
