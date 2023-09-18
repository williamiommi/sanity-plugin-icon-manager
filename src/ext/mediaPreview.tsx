import IconPreview from '../components/IconPreview'
import {IconifyType} from '../types/IconifyType'

export const mediaPreview = (value: IconifyType, original?: boolean) => {
  if (!value || !value.icon) return null
  const obj = {icon: value.icon, width: '80%', height: '80%', hideText: true}
  if (original) return IconPreview(obj)
  return IconPreview({...obj, value, icon: undefined})
}
