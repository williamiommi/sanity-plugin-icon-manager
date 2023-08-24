import {useEffect} from 'react'
import {FieldProps, useFormValue} from 'sanity'
import {useAppStore} from '../store'

const useSetup = (fieldProps: FieldProps) => {
  const documentID = useFormValue(['_id']) as string
  const setDocumentID = useAppStore((s) => s.setDocumentID)
  const setSanityPatch = useAppStore((s) => s.setSanityPatch)

  useEffect(() => {
    setDocumentID(documentID)
    setSanityPatch(fieldProps.inputProps.onChange)
  }, [])
}

export default useSetup
