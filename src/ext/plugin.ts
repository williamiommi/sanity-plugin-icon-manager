import {definePlugin} from 'sanity'
import iconifySetup from '../lib/iconifySetup'
import IconifyTestDocument from '../schemas/documents/iconify.test.document'
import Iconify from '../schemas/objects/Iconify'
import IconifyPluginOptions from '../types/IconifyPluginOptions'

export const IconifyPlugin = definePlugin<void | IconifyPluginOptions>((config) => {
  iconifySetup(config)

  return {
    name: `sanity-plugin-iconify`,
    schema: {
      types: [Iconify(config), IconifyTestDocument],
    },
  }
})
