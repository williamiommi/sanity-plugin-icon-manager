export type IconifyColor = {
  hex: string
  rgba: {
    r: number
    g: number
    b: number
    a: number
  }
}

export type IconifySize = {
  width: number
  height: number
}

export type IconifyType = {
  icon: string
  downloadUrl: string
  inlineSvg?: string
  metadata: {
    collectionId: string
    collectionName: string
    iconName: string
    palette?: boolean
    license?: {
      name?: string
      url?: string
    }
    author?: {
      name?: string
      url?: string
    }
    size: IconifySize
    flipH: boolean
    flipV: boolean
    rotate: number
    color?: IconifyColor
  }
}
