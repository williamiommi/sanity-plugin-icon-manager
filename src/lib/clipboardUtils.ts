import {generateSvgDataUrl, generateSvgHtml} from './svgUtils'
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

export const copyHtmlToClipboard = async (original?: boolean): Promise<void> => {
  const html = await generateSvgHtml(original)
  if (html) copy2Clipboard(html)
}

export const copyDataUrlToClipboard = async (original?: boolean): Promise<void> => {
  const dataUrl = await generateSvgDataUrl(original)
  if (dataUrl) copy2Clipboard(dataUrl)
}
