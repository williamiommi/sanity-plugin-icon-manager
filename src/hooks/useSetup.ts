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

  useEffect(() => {
    setSanityValue(fieldProps.value as IconifyType)
    setSanityPatch(fieldProps.inputProps.onChange)
    setSanityToast(sanityToast)
    disableCache('all')
  }, [])
}

export default useSetup
