import {buildIcon, loadIcon} from '@iconify/react'
import {iconToHTML, replaceIDs, svgToData} from '@iconify/utils'
import DOMPurify from 'dompurify'
import {IconManagerColor, IconManagerSize} from '../types/IconManagerType'

export type SvgData = {
  icon: string
  size?: IconManagerSize
  rotate?: number
  flip?: string
  hFlip?: boolean
  vFlip?: boolean
  color?: IconManagerColor
}

const copy2Clipboard = async (text: string): Promise<boolean> => {
  await navigator.clipboard.writeText(text)
  return true
}

export const buildSvgHtml = async (data?: SvgData) => {
  if (!data?.icon) throw Error('Unable to find the icon')

  const customizations = {
    ...(data.size?.width && {width: data.size?.width}),
    ...(data.size?.height && {height: data.size?.height}),
    ...(data.rotate && {rotate: data.rotate}),
    ...(data.hFlip && {hFlip: data.hFlip}),
    ...(data.vFlip && {vFlip: data.vFlip}),
  }

  const lData = await loadIcon(data.icon)
  const bData = buildIcon(lData, customizations)
  let html = iconToHTML(replaceIDs(bData.body), bData.attributes)

  if (!html) throw Error('Unable to generate Svg Html')
  if (data.color?.hex) html = html.replaceAll('currentColor', data.color.hex)
  return DOMPurify.sanitize(html)
}

const buildSvgDataUrl = async (data?: SvgData) => {
  const html = await buildSvgHtml(data)
  if (!html) throw Error('Unable to generate Svg Html')
  const base64 = svgToData(html)
  if (!base64) throw Error('Unable to generate Svg Data URL')
  return base64
}

export const buildSvgUrls = async (
  iconifyEndpoint: string,
  data?: SvgData,
): Promise<{url: string; downloadUrl: string}> => {
  if (!data?.icon) throw Error('Unable to find the icon')

  const searchParams = new URLSearchParams()

  if (data.size?.width) searchParams.append('width', `${data.size.width}`)
  if (data.size?.height) searchParams.append('height', `${data.size.height}`)

  if (data.rotate && data.rotate > 0) searchParams.append('rotate', `${data.rotate}`)
  if (data.flip) searchParams.append('flip', data.flip)
  if (data.color && data.color.hex) searchParams.append('color', data.color.hex)

  const url = `${iconifyEndpoint}/${data.icon}.svg?${searchParams.toString()}`

  searchParams.append('download', '1')
  const downloadUrl = `${iconifyEndpoint}/${data.icon}.svg?${searchParams.toString()}`

  return {
    url,
    downloadUrl,
  }
}

export const copy2ClipboardSvgHtml = async (data?: SvgData): Promise<void | string> => {
  const res = await buildSvgHtml(data)
  if (res) await copy2Clipboard(res)
}

export const copy2ClipboardSvgDataUrl = async (data?: SvgData): Promise<void | string> => {
  const res = await buildSvgDataUrl(data)
  if (res) copy2Clipboard(res)
}
