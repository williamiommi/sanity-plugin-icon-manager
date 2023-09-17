export type PluginCustomColor = {
  hex: string
  title?: string
}

export type PluginCustomPalette = (string | PluginCustomColor)[]

export default interface IconifyPluginOptions {
  customEndpoint?: string
  customPalette?: PluginCustomPalette
}
