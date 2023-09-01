import IconPreview from '../components/IconPreview'
import {IconifyType} from '../types/IconifyType'

export const mediaPreview = (value: IconifyType) => {
  if (!value || !value.icon) return null
  return IconPreview({value, width: '80%', height: '80%', hideText: true})
}
