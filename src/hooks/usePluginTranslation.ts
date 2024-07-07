/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import {useTranslation, UseTranslationResponse} from 'sanity'
import {I18N_NAMESPACE} from '../lib/constants'

export default function usePluginTranslation(): UseTranslationResponse<
  'sanity-plugin-icon-manager',
  undefined
> {
  return useTranslation(I18N_NAMESPACE)
}
