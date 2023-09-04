import {IconifyIconCustomisations, buildIcon, loadIcon} from '@iconify-icon/react'
import {iconToHTML, replaceIDs, svgToData} from '@iconify/utils'
import DomPurify from 'dompurify'
import {AppStoreType, useAppStore} from '../store'
import {getFlipValue} from './iconifyUtils'
import {toastError} from './toastUtils'

const buildIconHtml = async (icon: string, customizations?: IconifyIconCustomisations) => {
  const lData = await loadIcon(icon)
  const bData = buildIcon(lData, customizations || {})
  const html = iconToHTML(replaceIDs(bData.body), bData.attributes)
  return html
}

const getIconCustomisations = (value?: AppStoreType) => {
  if (!value) return undefined
  return {
    width: value.size.width,
    height: value.size.height,
    rotate: value.rotate,
    hFlip: value.hFlip,
    vFlip: value.vFlip,
  }
}

const generateSearchParams = (
  original: boolean,
  appState: AppStoreType,
  download: boolean,
): string => {
  const searchParams = new URLSearchParams()
  if (!original) {
    if (appState.size.width) searchParams.append('width', `${appState.size.width}`)
    if (appState.size.height) searchParams.append('height', `${appState.size.height}`)
    if (appState.rotate > 0) searchParams.append('rotate', `${appState.rotate}`)
    const flipValue = getFlipValue(appState.hFlip, appState.vFlip)
    if (flipValue) searchParams.append('flip', flipValue)
    if (appState.color && appState.color.hex) searchParams.append('color', appState.color.hex)
  }
  if (download) {
    searchParams.append('download', `1`)
  }
  return searchParams.size > 0 ? `?${searchParams.toString()}` : ''
}

export const generateSvgHttpUrl = (original: boolean = false): string => {
  try {
    const appState = useAppStore.getState()
    const icon = appState.sanityValue?.icon
    if (!icon) throw Error('Unable to find the icon.')

    const searchParams = generateSearchParams(original, appState, false)
    return `https://api.iconify.design/${icon}.svg${searchParams}`
  } catch (e: any) {
    toastError(e)
    return '#'
  }
}

export const generateSvgDownloadUrl = (original: boolean = false): string => {
  try {
    const appState = useAppStore.getState()
    const icon = appState.sanityValue?.icon
    if (!icon) throw Error('Unable to find the icon.')

    const searchParams = generateSearchParams(original, appState, true)
    return `https://api.iconify.design/${icon}.svg${searchParams}`
  } catch (e: any) {
    toastError(e)
    return '#'
  }
}

export const generateSvgHtml = async (original?: boolean): Promise<string> => {
  try {
    const appState = useAppStore.getState()
    const icon = appState.sanityValue?.icon

    if (!icon) throw Error('Unable to find the icon.')

    let customizations
    if (!original) {
      customizations = getIconCustomisations(appState)
    }

    let html = await buildIconHtml(icon, customizations)
    if (!html) throw Error('Unable to generate Svg Html')
    if (appState.color?.hex) html = html.replaceAll('currentColor', appState.color?.hex)
    return DomPurify.sanitize(html)
  } catch (e: any) {
    toastError(e)
    return ''
  }
}

export const generateSvgDataUrl = async (original?: boolean): Promise<void | string> => {
  try {
    const html = await generateSvgHtml(original)
    if (!html) return undefined
    const base64 = svgToData(html)
    if (!base64) throw Error('Unable to generate Svg Data URL')
    return base64
  } catch (e: any) {
    toastError(e)
    return undefined
  }
}
