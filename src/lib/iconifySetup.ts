import {addAPIProvider, disableCache, enableCache} from '@iconify-icon/react'
import IconifyPluginOptions from '../types/IconifyPluginOptions'

const iconifySetup = (config: void | IconifyPluginOptions): void => {
  try {
    disableCache('all')
    enableCache('session')

    if (config?.customEndpoint && new URL(config.customEndpoint)) {
      addAPIProvider('', {
        resources: [config.customEndpoint],
      })
    }
  } catch (e: unknown) {
    console.error('Iconify Plugin', e)
  }
}

export default iconifySetup
