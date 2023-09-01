import {definePlugin} from 'sanity'
import schemaTypes from '../schemas'
import IconifyPluginOptions from '../types/IconifyPluginOptions'

export const IconifyPlugin = definePlugin<IconifyPluginOptions>((config: IconifyPluginOptions) => {
  return {
    name: `sanity-plugin-iconify`,
    schema: {
      types: schemaTypes,
    },
  }
})
