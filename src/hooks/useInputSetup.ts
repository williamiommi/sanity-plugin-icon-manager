import {useToast} from '@sanity/ui'
import {useEffect} from 'react'
import {ObjectInputProps} from 'sanity'

import {parseDefaultSize} from '../lib/common-utils'
import {DEFAULT_API_URL, FALLBACK_SIZE} from '../lib/constants'
import {useAppStoreContext} from '../store/context'
import IconManagerPluginOptions from '../types/IconManagerPluginOptions'
import {IconManagerType} from '../types/IconManagerType'
import useUserCanConfigure from './useUserCanConfigure'

const useInputSetup = (
  objectInputProps: ObjectInputProps,
  pluginOptions: void | IconManagerPluginOptions,
): void => {
  const sanityToast = useToast()
  const setDefaultSize = useAppStoreContext((s) => s.setDefaultSize)
  const setIconifyEndpoint = useAppStoreContext((s) => s.setIconifyEndpoint)
  const setPluginOptionCustomPalette = useAppStoreContext((s) => s.setPluginOptionCustomPalette)
  const setInlineSvgOption = useAppStoreContext((s) => s.setInlineSvgOption)
  const setAvailableCollectionsOption = useAppStoreContext((s) => s.setAvailableCollectionsOption)
  const setSanityFieldPath = useAppStoreContext((s) => s.setSanityFieldPath)
  const setSanityValue = useAppStoreContext((s) => s.setSanityValue)
  const setSanityPatch = useAppStoreContext((s) => s.setSanityPatch)
  const setSanityPathFocus = useAppStoreContext((s) => s.setSanityPathFocus)
  const setSanityToast = useAppStoreContext((s) => s.setSanityToast)
  const setSanityUserCanEdit = useAppStoreContext((s) => s.setSanityUserCanEdit)
  const setRotate = useAppStoreContext((s) => s.setRotate)
  const setFlip = useAppStoreContext((s) => s.setFlip)
  const setInlineSvg = useAppStoreContext((s) => s.setInlineSvg)
  const updateSize = useAppStoreContext((s) => s.updateSize)
  const setColor = useAppStoreContext((s) => s.setColor)

  useUserCanConfigure(objectInputProps, pluginOptions)

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
    setSanityUserCanEdit(!objectInputProps.readOnly)
    setIconifyEndpoint(pluginOptions?.customEndpoint || DEFAULT_API_URL)

    setDefaultSize(
      parseDefaultSize(pluginOptions?.defaultSize) ?? {width: FALLBACK_SIZE, height: FALLBACK_SIZE},
    )

    if (pluginOptions?.customPalette) setPluginOptionCustomPalette(pluginOptions.customPalette)
    if (pluginOptions?.inlineSvg) setInlineSvgOption(pluginOptions.inlineSvg)
    if (pluginOptions?.availableCollections)
      setAvailableCollectionsOption(pluginOptions.availableCollections)
  }, [])
}

export default useInputSetup
