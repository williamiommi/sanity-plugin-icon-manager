export type IconManagerColor = {
  hex: string
  rgba: {
    r: number
    g: number
    b: number
    a: number
  }
}

export type IconManagerSize = {
  width: number
  height: number
}

export type IconManagerType = {
  icon: string
  metadata: {
    url: string
    downloadUrl: string
    inlineSvg?: string
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
    size: IconManagerSize
    hFlip: boolean
    vFlip: boolean
    flip: 'horizontal' | 'vertical' | 'horizontal,vertical'
    rotate: 0 | 1 | 2 | 3
    color?: IconManagerColor
  }
}
