import {IconifyInfo} from '@iconify/types'
import IconifyQueryRequest from './IconifyQueryRequest'

export default interface IconifyQueryResponse {
  icons: string[]
  total: number
  limit: number
  start: number
  collections: Record<string, IconifyInfo>
  request: IconifyQueryRequest
  totalPages: number
}
