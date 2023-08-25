type IconifyType = {
  icon: string
  downloadUrl: string
  inlineSvg?: string
  metadata?: {
    collectionId?: string
    collectionName?: string
    iconName?: string
    palette?: boolean
    viewbox?: number
    customSize?: number
    flipH?: boolean
    flipV?: boolean
    rotate?: number
    color?: string
    license?: {
      name?: string
      url?: string
    }
    author?: {
      name?: string
      url?: string
    }
  }
}

export default IconifyType
