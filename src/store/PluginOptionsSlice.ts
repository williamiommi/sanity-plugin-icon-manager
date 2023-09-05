import {StateCreator} from 'zustand'
import {AppStoreType} from '.'
import IconifyPluginOptions from '../types/IconifyPluginOptions'

export interface PluginOptionsSlice {
  pluginOptions?: IconifyPluginOptions
  setPluginOptionApiUrl: (apiUrl: string) => void
}

export const createPluginOptionsSlice: StateCreator<AppStoreType, [], [], PluginOptionsSlice> = (
  set,
) => ({
  setPluginOptionApiUrl: (apiUrl: string) => set(() => ({pluginOptions: {apiUrl}})),
})
