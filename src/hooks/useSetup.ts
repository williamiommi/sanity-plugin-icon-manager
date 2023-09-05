import {disableCache} from '@iconify-icon/react'
import {useToast} from '@sanity/ui'
import {useEffect} from 'react'
import {ObjectFieldProps} from 'sanity'
import {useAppStore} from '../store'
import IconifyPluginOptions from '../types/IconifyPluginOptions'
import {IconifyType} from '../types/IconifyType'

const useSetup = (fieldProps: ObjectFieldProps, pluginOptions: IconifyPluginOptions): void => {
  const sanityToast = useToast()
  const setPluginOptionApiUrl = useAppStore((s) => s.setPluginOptionApiUrl)
  const setPluginOptionCustomPalette = useAppStore((s) => s.setPluginOptionCustomPalette)
  const setSanityFieldPath = useAppStore((s) => s.setSanityFieldPath)
  const setSanityValue = useAppStore((s) => s.setSanityValue)
  const setSanityPatch = useAppStore((s) => s.setSanityPatch)
  const setSanityPathFocus = useAppStore((s) => s.setSanityPathFocus)
  const setSanityToast = useAppStore((s) => s.setSanityToast)
  const setSanityUserCanEdit = useAppStore((s) => s.setSanityUserCanEdit)
  const setRotate = useAppStore((s) => s.setRotate)
  const setFlip = useAppStore((s) => s.setFlip)
  const setInlineSvg = useAppStore((s) => s.setInlineSvg)
  const setWidth = useAppStore((s) => s.setWidth)
  const setHeight = useAppStore((s) => s.setHeight)
  const setColor = useAppStore((s) => s.setColor)

  useEffect(() => {
    const value = fieldProps.value as IconifyType
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
  }, [fieldProps.value])

  useEffect(() => {
    setSanityFieldPath(fieldProps.path)
    setSanityPatch(fieldProps.inputProps.onChange)
    setSanityPathFocus(fieldProps.inputProps.onPathFocus)
    setSanityToast(sanityToast)
    setSanityUserCanEdit(!fieldProps.inputProps.readOnly)
    setPluginOptionApiUrl(pluginOptions.apiUrl!)
    if (pluginOptions.customPalette) setPluginOptionCustomPalette(pluginOptions.customPalette)
    // disable iconify cache
    disableCache('all')
  }, [])
}

export default useSetup
