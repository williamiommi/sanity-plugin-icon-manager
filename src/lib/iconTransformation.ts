import {IconifyIconCustomisations, buildIcon, loadIcon} from '@iconify-icon/react'
import {iconToHTML, replaceIDs, svgToData, svgToURL} from '@iconify/utils'
import {toastError} from './toastUtils'

const buildIconHtml = async (icon: string, customizations?: IconifyIconCustomisations) => {
  const lData = await loadIcon(icon)
  const bData = buildIcon(lData, customizations || {})
  const html = iconToHTML(replaceIDs(bData.body), bData.attributes)
  return html
}

export type Flip = 'horizontal' | 'vertical' | 'horizontal,vertical' | undefined

export const getFlipValue = (flipH?: boolean, flipV?: boolean): Flip => {
  let output: Flip
  if (flipH) output = 'horizontal'
  if (flipV) output = 'vertical'
  if (flipH && flipV) output = 'horizontal,vertical'
  return output
}

export const icon2Html = async (
  icon: string,
  customizations?: IconifyIconCustomisations,
): Promise<string | false> => {
  try {
    const html = await buildIconHtml(icon, customizations)
    return html
  } catch (e: unknown) {
    toastError(e)
    return false
  }
}

export const icon2Base64 = async (
  icon: string,
  customizations?: IconifyIconCustomisations,
): Promise<string | false> => {
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
  customizations?: IconifyIconCustomisations,
): Promise<string | false> => {
  try {
    const html = await buildIconHtml(icon, customizations)
    const url = svgToURL(html)
    return url
  } catch (e: unknown) {
    toastError(e)
    return false
  }
}
