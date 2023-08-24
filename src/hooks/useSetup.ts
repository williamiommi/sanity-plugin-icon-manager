import {useToast} from '@sanity/ui'
import {useEffect} from 'react'
import {FieldProps} from 'sanity'
import {useAppStore} from '../store'

const useSetup = (fieldProps: FieldProps): void => {
  const sanityToast = useToast()
  const setSanityPatch = useAppStore((s) => s.setSanityPatch)
  const setSanityToast = useAppStore((s) => s.setSanityToast)

  // store sanity utilities
  useEffect(() => {
    setSanityPatch(fieldProps.inputProps.onChange)
    setSanityToast(sanityToast)
  }, [])
}

export default useSetup
