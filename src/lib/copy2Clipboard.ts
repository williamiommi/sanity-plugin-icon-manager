import {IconifyIconCustomisations} from '@iconify-icon/react'
import {icon2Base64, icon2Html, icon2Url} from './iconTransformation'
import {toastError, toastSuccess} from './toastUtils'

export const copy2Clipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    toastSuccess('Copied to clipboard')
    return true
  } catch (e: unknown) {
    toastError(e)
    return false
  }
}

export const copySvgHtml = async (
  icon: string,
  customizations?: IconifyIconCustomisations,
): Promise<void> => {
  const text = await icon2Html(icon, customizations)
  if (typeof text === 'string') {
    copy2Clipboard(text)
  }
}

export const copySvgBase64 = async (
  icon: string,
  customizations?: IconifyIconCustomisations,
): Promise<void> => {
  const text = await icon2Base64(icon, customizations)
  if (typeof text === 'string') {
    copy2Clipboard(text)
  }
}

export const copySvgDataUrl = async (
  icon: string,
  customizations?: IconifyIconCustomisations,
): Promise<void> => {
  const text = await icon2Url(icon, customizations)
  if (typeof text === 'string') {
    copy2Clipboard(text)
  }
}