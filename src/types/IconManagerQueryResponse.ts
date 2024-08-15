import {IconifyInfo} from '@iconify/types'

import {IconifyInfoEnhanced} from './IconifyInfoEnhanced'
import IconManagerQueryRequest from './IconManagerQueryRequest'

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
