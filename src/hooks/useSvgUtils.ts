import {copyDataUrlToClipboard, copyHtmlToClipboard} from '../lib/clipboardUtils'
import {generateSvgDownloadUrl, generateSvgHtml} from '../lib/svgUtils'
import {useAppStoreContext} from '../store/context'

const useSvgUtils = () => {
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const hFlip = useAppStoreContext((s) => s.hFlip)
  const vFlip = useAppStoreContext((s) => s.vFlip)
  const rotate = useAppStoreContext((s) => s.rotate)
  const size = useAppStoreContext((s) => s.size)
  const color = useAppStoreContext((s) => s.color)
  const apiUrl = useAppStoreContext((s) => s.apiUrl)
  const sanityToast = useAppStoreContext((s) => s.sanityToast)

  const onGenerateSvgHtml = () => {
    return generateSvgHtml({sanityValue, hFlip, vFlip, rotate, size, color, apiUrl, sanityToast})
  }

  const onGenerateSvgDownloadUrl = (original?: boolean) => {
    return generateSvgDownloadUrl(
      {sanityValue, hFlip, vFlip, rotate, size, color, apiUrl, sanityToast},
      original,
    )
  }

  const onCopyHtmlToClipboard = (original?: boolean) => {
    copyHtmlToClipboard(
      {sanityValue, hFlip, vFlip, rotate, size, color, apiUrl, sanityToast},
      original,
    )
  }

  const onCopyDataUrlToClipboard = (original?: boolean) => {
    copyDataUrlToClipboard(
      {sanityValue, hFlip, vFlip, rotate, size, color, apiUrl, sanityToast},
      original,
    )
  }

  return {
    onGenerateSvgHtml,
    onGenerateSvgDownloadUrl,
    onCopyHtmlToClipboard,
    onCopyDataUrlToClipboard,
  }
}

export default useSvgUtils
