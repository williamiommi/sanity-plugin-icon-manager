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
    license?: {
      name?: string
      url?: string
    }
    author?: {
      name?: string
      url?: string
    }
    customSize?: number
    flipH?: boolean
    flipV?: boolean
    rotate?: number
    color?: {
      hex?: string
      rgba?: {
        r: number
        g: number
        b: number
        a?: number
      }
    }
  }
}

export default IconifyType
