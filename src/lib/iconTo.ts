import {IconifyIconCustomisations, buildIcon, loadIcon} from '@iconify-icon/react'
import {iconToHTML, replaceIDs, svgToData, svgToURL} from '@iconify/utils'
import {toastError} from './toastUtils'

const buildIconHtml = async (icon: string, customizations: IconifyIconCustomisations) => {
  const lData = await loadIcon(icon)
  const bData = buildIcon(lData, customizations)
  const html = iconToHTML(replaceIDs(bData.body), bData.attributes)
  return html
}

export const icon2Html = async (
  icon: string,
  customizations: IconifyIconCustomisations,
): Promise<string | boolean> => {
  try {
    return await buildIconHtml(icon, customizations)
  } catch (e: unknown) {
    toastError(e)
    return false
  }
}

export const icon2Base64 = async (
  icon: string,
  customizations: IconifyIconCustomisations = {},
): Promise<string | boolean> => {
  try {
    const html = await buildIconHtml(icon, customizations)
    const base64 = svgToData(html)
    return base64
  } catch (e: unknown) {
    toastError(e)
    return false
  }
}

export const icon2Url = async (
  icon: string,
  customizations: IconifyIconCustomisations = {},
): Promise<string | boolean> => {
  try {
    const html = await buildIconHtml(icon, customizations)
    const url = svgToURL(html)
    return url
  } catch (e: unknown) {
    toastError(e)
    return false
  }
}
