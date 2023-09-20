export default interface IconManagerQueryRequest {
  query: string
  limit?: number
  start?: number
  prefix?: string
  prefixes?: string
  category?: string
}
