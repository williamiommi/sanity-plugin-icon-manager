import IconPreview from '../components/IconPreview'
import {IconManagerType} from '../types/IconManagerType'

export const mediaPreview = (value: IconManagerType, original?: boolean) => {
  if (!value || !value.icon) return null
  const obj = {icon: value.icon, width: '80%', height: '80%', hideText: true}
  if (original) return IconPreview(obj)
  return IconPreview({...obj, value, icon: undefined})
}
