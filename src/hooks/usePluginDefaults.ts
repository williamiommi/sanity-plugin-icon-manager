import {useEffect} from 'react'

import {parseDefaultSize} from '../lib/common-utils'
import {FALLBACK_SIZE} from '../lib/constants'
import {useAppStoreContext} from '../store/context'
import IconManagerPluginOptions from '../types/IconManagerPluginOptions'

export default function usePluginDefaults(pluginOptions: IconManagerPluginOptions | void): void {
  const setDefaults = useAppStoreContext((s) => s.setDefaults)

  useEffect(() => {
    setDefaults({
      size: parseDefaultSize(pluginOptions?.defaults?.size) ||
        parseDefaultSize(pluginOptions?.defaultSize) || {
          width: FALLBACK_SIZE,
          height: FALLBACK_SIZE,
        },
      inlineSvg: pluginOptions?.defaults?.inlineSvg || pluginOptions?.inlineSvg,
    })
  }, [pluginOptions, setDefaults])
}
