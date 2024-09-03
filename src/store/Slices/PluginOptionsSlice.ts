import {StateCreator} from 'zustand'

import {isValidHex} from '../../lib/color-utils'
import {
  PluginCustomColor,
  PluginCustomPalette,
  PluginOptionsDefaults,
} from '../../types/IconManagerPluginOptions'

export interface PluginOptionsSlice {
  defaults?: PluginOptionsDefaults
  availableCollectionsOption?: string
  iconifyEndpoint?: string
  customPalette?: PluginCustomColor[]
  setDefaults: (defaults: PluginOptionsDefaults) => void
  setIconifyEndpoint: (iconifyEndpoint: string) => void
  setPluginOptionCustomPalette: (customPalette: PluginCustomPalette) => void
  setAvailableCollectionsOption: (availableCollectionsOption: string[]) => void
}

export const createPluginOptionsSlice: StateCreator<
  PluginOptionsSlice,
  [],
  [],
  PluginOptionsSlice
> = (set) => ({
  setDefaults: (defaults: PluginOptionsDefaults) => set(() => ({defaults})),
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
  setAvailableCollectionsOption: (availableCollectionsOption: string[]) =>
    set(() => ({availableCollectionsOption: availableCollectionsOption.join(',')})),
})
