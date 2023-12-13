export type PluginCustomColor = {
  hex: string
  title?: string
}

export type PluginCustomPalette = (string | PluginCustomColor)[]

export default interface IconManagerPluginOptions {
  customEndpoint?: string
  customPalette?: PluginCustomPalette
  storeInlineSvg?: boolean
}
