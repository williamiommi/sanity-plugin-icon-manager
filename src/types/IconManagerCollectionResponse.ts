import {IconifyInfo, IconifyJSON} from '@iconify/types'

export default interface IconManagerCollectionResponse {
  // Icon set prefix
  prefix: string

  // Number of icons (duplicate of info?.total)
  total: number

  // Icon set title, if available (duplicate of info?.name)
  title?: string

  // Icon set info
  info?: IconifyInfo

  // List of icons without categories
  uncategorized?: string[]

  // List of icons, sorted by category
  categories?: Record<string, string[]>

  // List of hidden icons
  hidden?: string[]

  // List of aliases, key = alias, value = parent icon
  aliases?: Record<string, string>

  // Characters, key = character, value = icon name
  chars?: Record<string, string>

  // Themes
  themes?: IconifyJSON['themes']
  prefixes?: IconifyJSON['prefixes']
  suffixes?: IconifyJSON['suffixes']
}
