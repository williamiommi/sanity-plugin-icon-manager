export type IconifyColor = {
  hex?: string
  rgba?: {
    r: number
    g: number
    b: number
    a?: number
  }
}

export type IconitySize = {
  width: number
  height: number
}

type IconifyType = {
  icon: string
  downloadUrl: string
  inlineSvg?: string
  metadata?: {
    collectionId?: string
    collectionName?: string
    iconName?: string
    palette?: boolean
    license?: {
      name?: string
      url?: string
    }
    author?: {
      name?: string
      url?: string
    }
    size: IconitySize
    flipH?: boolean
    flipV?: boolean
    rotate?: number
    color?: IconifyColor
  }
}

export default IconifyType
