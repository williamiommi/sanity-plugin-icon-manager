import {useToast} from '@sanity/ui'
import {useEffect} from 'react'
import {ObjectInputProps} from 'sanity'

import {DEFAULT_API_URL} from '../lib/constants'
import {useAppStoreContext} from '../store/context'
import IconManagerPluginOptions from '../types/IconManagerPluginOptions'
import {IconManagerType} from '../types/IconManagerType'
import usePluginDefaults from './usePluginDefaults'
import useUserCan from './useUserCan'

const useInputSetup = (
  objectInputProps: ObjectInputProps,
  pluginOptions: void | IconManagerPluginOptions,
): void => {
  const sanityToast = useToast()
  const setIconifyEndpoint = useAppStoreContext((s) => s.setIconifyEndpoint)
  const setPluginOptionCustomPalette = useAppStoreContext((s) => s.setPluginOptionCustomPalette)
  const setAvailableCollectionsOption = useAppStoreContext((s) => s.setAvailableCollectionsOption)
  const setSanityFieldPath = useAppStoreContext((s) => s.setSanityFieldPath)
  const setSanityValue = useAppStoreContext((s) => s.setSanityValue)
  const setSanityPatch = useAppStoreContext((s) => s.setSanityPatch)
  const setSanityPathFocus = useAppStoreContext((s) => s.setSanityPathFocus)
  const setSanityToast = useAppStoreContext((s) => s.setSanityToast)
  const setRotate = useAppStoreContext((s) => s.setRotate)
  const setFlip = useAppStoreContext((s) => s.setFlip)
  const setInlineSvg = useAppStoreContext((s) => s.setInlineSvg)
  const updateSize = useAppStoreContext((s) => s.updateSize)
  const setColor = useAppStoreContext((s) => s.setColor)

  // this hook set all the booleans related to what the user can do, based on permissions
  useUserCan(objectInputProps, pluginOptions)

  // this hook set all defaults options of the plugin
  usePluginDefaults(pluginOptions)

  useEffect(() => {
    const value = objectInputProps.value as IconManagerType

    // setup sanity slice
    setSanityValue(value)

    if (value?.metadata) {
      // setup configure slice
      setFlip(value.metadata.hFlip, value.metadata.vFlip)
      setRotate(value.metadata.rotate)
      updateSize(value.metadata.size)
      setInlineSvg(value.metadata.inlineSvg)
      if (value.metadata.color) setColor(value.metadata.color?.hex)
    }
  }, [objectInputProps.value])

  useEffect(() => {
    setSanityFieldPath(objectInputProps.path)
    setSanityPatch(objectInputProps.onChange)
    setSanityPathFocus(objectInputProps.onPathFocus)
    setSanityToast(sanityToast)
    setIconifyEndpoint(pluginOptions?.customEndpoint || DEFAULT_API_URL)

    if (pluginOptions?.customPalette) setPluginOptionCustomPalette(pluginOptions.customPalette)
    if (pluginOptions?.availableCollections)
      setAvailableCollectionsOption(pluginOptions.availableCollections)
  }, [])
}

export default useInputSetup
