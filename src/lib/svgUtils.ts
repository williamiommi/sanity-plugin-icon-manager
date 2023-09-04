import {IconifyIconCustomisations, buildIcon, loadIcon} from '@iconify-icon/react'
import {iconToHTML, replaceIDs, svgToData} from '@iconify/utils'
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

export const generateSvgDownloadUrl = (original?: boolean): string => {
  try {
    const appState = useAppStore.getState()
    const icon = appState.sanityValue?.icon
    if (!icon) throw Error('Unable to find the icon.')

    const searchParams = new URLSearchParams()
    searchParams.append('download', `1`)
    if (!original) {
      if (appState.size.width) searchParams.append('width', `${appState.size.width}`)
      if (appState.size.height) searchParams.append('height', `${appState.size.height}`)
      if (appState.rotate > 0) searchParams.append('rotate', `${appState.rotate}`)
      const flipValue = getFlipValue(appState.hFlip, appState.vFlip)
      if (flipValue) searchParams.append('flip', flipValue)
      if (appState.color && appState.color.hex) searchParams.append('color', appState.color.hex)
    }

    return `https://api.iconify.design/${icon}.svg?${searchParams.toString()}`
  } catch (e: any) {
    toastError(e)
    return '#'
  }
}

export const generateSvgHtml = async (original?: boolean): Promise<void | string> => {
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
    if (appState.sanityValue?.metadata.color?.hex)
      html = html.replaceAll('currentColor', appState.sanityValue.metadata.color.hex)
    return html
  } catch (e: any) {
    toastError(e)
    return undefined
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
