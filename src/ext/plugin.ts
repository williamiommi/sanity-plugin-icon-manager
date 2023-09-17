import {disableCache, enableCache} from '@iconify-icon/react'
import {definePlugin} from 'sanity'
import IconifyTestDocument from '../schemas/documents/iconify.test.document'
import Iconify from '../schemas/objects/Iconify'
import IconifyPluginOptions from '../types/IconifyPluginOptions'

export const IconifyPlugin = definePlugin<void | IconifyPluginOptions>((config) => {
  // disable iconify cache
  disableCache('all')
  enableCache('session')

  return {
    name: `sanity-plugin-iconify`,
    schema: {
      types: [Iconify(config), IconifyTestDocument],
    },
  }
})
