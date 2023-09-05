export type PluginCustomColor = {
  hex: string
  title?: string
}

export type PluginCustomPalette = (string | PluginCustomColor)[]

export default interface IconifyPluginOptions {
  apiUrl?: string
  customPalette?: PluginCustomPalette
}
