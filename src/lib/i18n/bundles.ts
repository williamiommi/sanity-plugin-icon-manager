import {defineLocaleResourceBundle} from 'sanity'
import {I18N_NAMESPACE} from '../constants'

const enUsResourceBundle = defineLocaleResourceBundle({
  locale: 'en-US',
  namespace: I18N_NAMESPACE,
  resources: () => import('./en-US'),
})

const itITResourceBundle = defineLocaleResourceBundle({
  locale: 'it-IT',
  namespace: I18N_NAMESPACE,
  resources: () => import('./it-IT'),
})

export default [enUsResourceBundle, itITResourceBundle]
