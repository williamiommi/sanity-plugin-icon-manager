import {IconManagerSize} from './IconManagerType'

export type PluginCustomColor = {
  hex: string
  title?: string
}

export type PluginCustomPalette = (string | PluginCustomColor)[]

export type PluginOptionsDefaults = {
  size?: IconManagerSize
  inlineSvg?: boolean
}

export default interface IconManagerPluginOptions {
  configurationDialog?: {
    hideFor?: 'all' | string[]
  }
  defaults?: PluginOptionsDefaults
  customEndpoint?: string
  customPalette?: PluginCustomPalette
  availableCollections?: string[]
  /**@deprecated use `defaults.size` instead. This will be removed in the next major release */
  defaultSize?: IconManagerSize
  /**@deprecated use `defaults.inlineSvg` instead. This will be removed in the next major release */
  inlineSvg?: boolean
}
