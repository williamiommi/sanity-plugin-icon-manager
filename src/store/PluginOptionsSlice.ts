import {StateCreator} from 'zustand'
import {AppStoreType} from '.'
import {isValidHex} from '../lib/colorUtils'
import {PluginCustomColor, PluginCustomPalette} from '../types/IconifyPluginOptions'

export interface PluginOptionsSlice {
  apiUrl?: string
  customPalette?: PluginCustomColor[]
  setPluginOptionApiUrl: (apiUrl: string) => void
  setPluginOptionCustomPalette: (customPalette: PluginCustomPalette) => void
}

export const createPluginOptionsSlice: StateCreator<AppStoreType, [], [], PluginOptionsSlice> = (
  set,
) => ({
  setPluginOptionApiUrl: (apiUrl: string) => set(() => ({apiUrl})),
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
})
