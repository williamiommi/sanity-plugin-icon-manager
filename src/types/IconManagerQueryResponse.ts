import {IconifyInfo} from '@iconify/types'
import IconManagerQueryRequest from './IconManagerQueryRequest'
import {IconifyInfoEnhanced} from './IconifyInfoEnhanced'

export type IconManagerIconInfo = {
  icon: string
  iconName: string
  collection?: IconifyInfoEnhanced
}

export default interface IconManagerQueryResponse {
  icons: string[]
  total: number
  limit: number
  start: number
  collections: Record<string, IconifyInfo>
  request: IconManagerQueryRequest
}
