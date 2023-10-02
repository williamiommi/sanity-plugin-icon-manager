import {IconifyInfo} from '@iconify/types'
import IconManagerQueryRequest from './IconManagerQueryRequest'

export default interface IconManagerQueryResponse {
  icons: string[]
  total: number
  limit: number
  start: number
  collections: Record<string, IconifyInfo>
  request: IconManagerQueryRequest
}
