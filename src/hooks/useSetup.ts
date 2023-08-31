import {disableCache} from '@iconify-icon/react'
import {useToast} from '@sanity/ui'
import {useEffect} from 'react'
import {ObjectFieldProps} from 'sanity'
import {useAppStore} from '../store'
import {IconifyType} from '../types/IconifyType'

const useSetup = (fieldProps: ObjectFieldProps): void => {
  const sanityToast = useToast()
  const setSanityFieldPath = useAppStore((s) => s.setSanityFieldPath)
  const setSanityValue = useAppStore((s) => s.setSanityValue)
  const setSanityPatch = useAppStore((s) => s.setSanityPatch)
  const setSanityPathFocus = useAppStore((s) => s.setSanityPathFocus)
  const setSanityToast = useAppStore((s) => s.setSanityToast)
  const setSanityUserCanEdit = useAppStore((s) => s.setSanityUserCanEdit)
  const setRotate = useAppStore((s) => s.setRotate)
  const setToggle = useAppStore((s) => s.setToggle)
  const setWidth = useAppStore((s) => s.setWidth)
  const setHeight = useAppStore((s) => s.setHeight)
  const setColor = useAppStore((s) => s.setColor)

  useEffect(() => {
    const value = fieldProps.value as IconifyType
    // setup sanity slice
    setSanityValue(value)

    if (value?.metadata) {
      // setup configure slice
      setToggle(value.metadata.flipH, value.metadata.flipV)
      setRotate(value.metadata.rotate)
      setWidth(value.metadata.size.width)
      setHeight(value.metadata.size.height)
      if (value.metadata.color) setColor(value.metadata.color?.hex)
    }
  }, [fieldProps.value])

  useEffect(() => {
    setSanityFieldPath(fieldProps.path)
    setSanityPatch(fieldProps.inputProps.onChange)
    setSanityPathFocus(fieldProps.inputProps.onPathFocus)
    setSanityToast(sanityToast)
    setSanityUserCanEdit(!fieldProps.inputProps.readOnly)
    // disable iconify cache
    disableCache('all')
  }, [])
}

export default useSetup
