import {ToastContextValue} from '@sanity/ui'
import {AppStoreType} from '../store/context'
import {generateSvgDataUrl, generateSvgHtml} from './svgUtils'
import {toastError, toastSuccess} from './toastUtils'

type AppStoreTypePartial = Pick<
  AppStoreType,
  'sanityValue' | 'hFlip' | 'vFlip' | 'rotate' | 'size' | 'color' | 'sanityToast' | 'apiUrl'
>

export const copy2Clipboard = async (
  text: string,
  sanityToast: ToastContextValue | undefined,
): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    toastSuccess({sanityToast, title: 'Copied to clipboard'})
    return true
  } catch (e: unknown) {
    toastError(sanityToast, e)
    return false
  }
}

export const copyHtmlToClipboard = async (
  appState: AppStoreTypePartial,
  original?: boolean,
): Promise<void> => {
  const html = await generateSvgHtml(appState, original)
  if (html) copy2Clipboard(html, appState.sanityToast)
}

export const copyDataUrlToClipboard = async (
  appState: AppStoreTypePartial,
  original?: boolean,
): Promise<void> => {
  const dataUrl = await generateSvgDataUrl(appState, original)
  if (dataUrl) copy2Clipboard(dataUrl, appState.sanityToast)
}
