import {definePlugin} from 'sanity'
import {DEFAULT_API_URL} from '../lib/constants'
import IconifyTestDocument from '../schemas/documents/iconify.test.document'
import Iconify from '../schemas/objects/Iconify'
import IconifyPluginOptions from '../types/IconifyPluginOptions'

export const IconifyPlugin = definePlugin<IconifyPluginOptions>((config?: IconifyPluginOptions) => {
  const pluginConfig: IconifyPluginOptions = {
    ...config,
    apiUrl: config?.apiUrl || DEFAULT_API_URL,
  }
  return {
    name: `sanity-plugin-iconify`,
    schema: {
      types: [Iconify(pluginConfig), IconifyTestDocument],
    },
  }
})
