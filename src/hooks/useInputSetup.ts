import {useToast} from '@sanity/ui'
import {useEffect} from 'react'
import {ObjectInputProps} from 'sanity'
import {DEFAULT_API_URL} from '../lib/constants'
import {useAppStoreContext} from '../store/context'
import IconManagerPluginOptions from '../types/IconManagerPluginOptions'
import {IconManagerType} from '../types/IconManagerType'

const useInputSetup = (
  objectInputProps: ObjectInputProps,
  pluginOptions: void | IconManagerPluginOptions,
): void => {
  const sanityToast = useToast()
  const setIconifyEndpoint = useAppStoreContext((s) => s.setIconifyEndpoint)
  const setPluginOptionCustomPalette = useAppStoreContext((s) => s.setPluginOptionCustomPalette)
  const setPluginOptionStoreInlineSvg = useAppStoreContext((s) => s.setPluginOptionStoreInlineSvg)
  const setSanityFieldPath = useAppStoreContext((s) => s.setSanityFieldPath)
  const setSanityValue = useAppStoreContext((s) => s.setSanityValue)
  const setSanityPatch = useAppStoreContext((s) => s.setSanityPatch)
  const setSanityPathFocus = useAppStoreContext((s) => s.setSanityPathFocus)
  const setSanityToast = useAppStoreContext((s) => s.setSanityToast)
  const setSanityUserCanEdit = useAppStoreContext((s) => s.setSanityUserCanEdit)
  const setRotate = useAppStoreContext((s) => s.setRotate)
  const setFlip = useAppStoreContext((s) => s.setFlip)
  const setInlineSvg = useAppStoreContext((s) => s.setInlineSvg)
  const setWidth = useAppStoreContext((s) => s.setWidth)
  const setHeight = useAppStoreContext((s) => s.setHeight)
  const setColor = useAppStoreContext((s) => s.setColor)

  useEffect(() => {
    const value = objectInputProps.value as IconManagerType

    // setup sanity slice
    setSanityValue(value)

    if (value?.metadata) {
      // setup configure slice
      setFlip(value.metadata.hFlip, value.metadata.vFlip)
      setRotate(value.metadata.rotate)
      setWidth(value.metadata.size.width)
      setHeight(value.metadata.size.height)
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
    if (pluginOptions?.customPalette) setPluginOptionCustomPalette(pluginOptions.customPalette)
    if (pluginOptions?.storeInlineSvg) {
      setPluginOptionStoreInlineSvg(pluginOptions.storeInlineSvg)
    }
  }, [])
}

export default useInputSetup
