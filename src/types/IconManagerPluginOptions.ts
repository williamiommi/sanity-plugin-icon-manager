import {IconManagerSize} from './IconManagerType'

export type PluginCustomColor = {
  hex: string
  title?: string
}

export type PluginCustomPalette = (string | PluginCustomColor)[]

export default interface IconManagerPluginOptions {
  configurationDialog?: {
    hideFor?: 'all' | string[]
  }
  defaultSize?: IconManagerSize
  customEndpoint?: string
  customPalette?: PluginCustomPalette
  inlineSvg?: boolean
  availableCollections?: string[]
}
