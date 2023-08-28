import {disableCache} from '@iconify-icon/react'
import {useToast} from '@sanity/ui'
import {useEffect} from 'react'
import {FieldProps} from 'sanity'
import {useAppStore} from '../store'
import IconifyType from '../types/IconifyType'

const useSetup = (fieldProps: FieldProps): void => {
  const sanityToast = useToast()
  const setSanityValue = useAppStore((s) => s.setSanityValue)
  const setSanityPatch = useAppStore((s) => s.setSanityPatch)
  const setSanityToast = useAppStore((s) => s.setSanityToast)
  const setRotate = useAppStore((s) => s.setRotate)
  const setToggle = useAppStore((s) => s.setToggle)
  const setWidth = useAppStore((s) => s.setWidth)
  const setHeight = useAppStore((s) => s.setHeight)
  const setColor = useAppStore((s) => s.setColor)

  useEffect(() => {
    const value = fieldProps.value as IconifyType

    // setup sanity slice
    setSanityValue(value)
    setSanityPatch(fieldProps.inputProps.onChange)
    setSanityToast(sanityToast)

    // setup configure slice
    setToggle(value.metadata.flipH, value.metadata.flipV)
    setRotate(value.metadata.rotate)
    setWidth(value.metadata.size.width)
    setHeight(value.metadata.size.height)
    if (value.metadata.color) setColor(value.metadata.color?.hex)

    // disable iconify cache
    disableCache('all')
  }, [])
}

export default useSetup
