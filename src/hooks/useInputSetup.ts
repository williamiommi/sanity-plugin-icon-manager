import {disableCache} from '@iconify-icon/react'
import {useToast} from '@sanity/ui'
import {useEffect} from 'react'
import {ObjectInputProps} from 'sanity'
import {useAppStoreContext} from '../store/context'
import IconifyPluginOptions from '../types/IconifyPluginOptions'
import {IconifyType} from '../types/IconifyType'

const useInputSetup = (
  objectInputProps: ObjectInputProps,
  pluginOptions: IconifyPluginOptions,
): void => {
  const sanityToast = useToast()
  const setPluginOptionApiUrl = useAppStoreContext((s) => s.setPluginOptionApiUrl)
  const setPluginOptionCustomPalette = useAppStoreContext((s) => s.setPluginOptionCustomPalette)
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
    const value = objectInputProps.value as IconifyType

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
    setPluginOptionApiUrl(pluginOptions.apiUrl!)
    if (pluginOptions.customPalette) setPluginOptionCustomPalette(pluginOptions.customPalette)
    // disable iconify cache
    disableCache('all')
  }, [])
}

export default useInputSetup
