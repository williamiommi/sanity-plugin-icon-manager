/* eslint-disable no-param-reassign */
import {buildIcon, loadIcon} from '@iconify/react'
import {iconToHTML, replaceIDs} from '@iconify/utils'
import DOMPurify from 'dompurify'
import {IconManagerColor, IconManagerSize} from '../types/IconManagerType'

export type SvgData = {
  icon: string
  size: IconManagerSize
  rotate?: number
  flip?: string
  hFlip?: boolean
  vFlip?: boolean
  color?: IconManagerColor
}

export const keepAspectRatioCalculator = (
  originalWidth: number,
  originalHeight: number,
  newWidth?: number,
  newHeight?: number,
): IconManagerSize => {
  if (!newWidth && !newHeight) return {width: 0, height: 0}

  const aspectRatio = originalWidth / originalHeight

  if (newWidth) {
    newHeight = newWidth / aspectRatio
  } else if (newHeight) {
    newWidth = newHeight * aspectRatio
  }

  return {
    width: Math.round(newWidth!),
    height: Math.round(newHeight!),
  }
}

export const copy2Clipboard = async (text: string): Promise<boolean> => {
  await navigator.clipboard.writeText(text)
  return true
}

export const buildSvgHtml = async (data: SvgData): Promise<string> => {
  if (!data.icon) throw Error('Unable to find the icon')

  const customizations = {
    width: data.size?.width,
    height: data.size?.height,
    rotate: data.rotate,
    hFlip: data.hFlip,
    vFlip: data.vFlip,
  }

  const lData = await loadIcon(data.icon)
  const bData = buildIcon(lData, customizations)
  let html = iconToHTML(replaceIDs(bData.body), bData.attributes)

  if (!html) throw Error('Unable to generate HTML')
  if (data.color?.hex) html = html.replaceAll('currentColor', data.color.hex)
  return DOMPurify.sanitize(html)
}

export const buildSvgDataUrl = async (data: SvgData): Promise<string> => {
  const html = await buildSvgHtml(data)
  if (!html) throw Error('Unable to generate HTML')
  const base64 = btoa(html)
  if (!base64) throw Error('Unable to generate Base64')
  return `data:image/svg+xml;base64,${base64}`
}

export const buildSvgUrls = (
  iconifyEndpoint: string,
  data: SvgData,
): {url: string; downloadUrl: string} => {
  if (!data.icon) throw Error('Unable to find the icon')

  const searchParams = new URLSearchParams()

  searchParams.append('width', `${data.size.width}`)
  searchParams.append('height', `${data.size.height}`)

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

export const copy2ClipboardSvgHtml = async (data: SvgData): Promise<void | string> => {
  const res = await buildSvgHtml(data)
  if (res) await copy2Clipboard(res)
}

export const copy2ClipboardSvgDataUrl = async (data: SvgData): Promise<void | string> => {
  const res = await buildSvgDataUrl(data)
  if (res) copy2Clipboard(res)
}
