import {useEffect, useMemo, useState} from 'react'
import {
  buildSvgHtml,
  buildSvgUrls,
  copy2ClipboardSvgDataUrl,
  copy2ClipboardSvgHtml,
} from '../lib/svg-utils'
import {toastError, toastSuccess} from '../lib/toast-utils'
import {useAppStoreContext} from '../store/context'

type UrlsType = {url: string; downloadUrl: string}
type ReturnType = {
  urls?: UrlsType
  copyHtmlToClipboard: () => void
  copyDataUrlToClipboard: () => void
  onGenerateSvgHtml: () => Promise<string>
}

export default function useSvgUtils(originalIcon?: boolean): ReturnType {
  const sanityToast = useAppStoreContext((s) => s.sanityToast)
  const iconifyEndpoint = useAppStoreContext((s) => s.iconifyEndpoint)
  const defaultSize = useAppStoreContext((s) => s.defaultSize)
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const inlineSvg = useAppStoreContext((s) => s.inlineSvg)
  const hFlip = useAppStoreContext((s) => s.hFlip)
  const vFlip = useAppStoreContext((s) => s.vFlip)
  const flip = useAppStoreContext((s) => s.flip)
  const rotate = useAppStoreContext((s) => s.rotate)
  const size = useAppStoreContext((s) => s.size)
  const color = useAppStoreContext((s) => s.color)
  const [urls, setUrls] = useState<UrlsType>()

  const svgData = useMemo(() => {
    if (originalIcon) return {icon: sanityValue?.icon!, size: defaultSize}
    return {icon: sanityValue?.icon!, size, rotate, hFlip, vFlip, flip, color, inlineSvg}
  }, [originalIcon, defaultSize, sanityValue, size, rotate, hFlip, vFlip, flip, color, inlineSvg])

  useEffect(() => {
    const updateUrls = async () => {
      setUrls(await buildSvgUrls(iconifyEndpoint!, svgData))
    }
    updateUrls()
  }, [iconifyEndpoint, svgData])

  const onGenerateSvgHtml = () => buildSvgHtml(svgData)

  const copy2Clipboard = async (isHtml: boolean) => {
    try {
      if (isHtml) await copy2ClipboardSvgHtml(svgData)
      else await copy2ClipboardSvgDataUrl(svgData)
      toastSuccess({sanityToast, title: 'Copied to clipboard'})
    } catch (e: any) {
      toastError(sanityToast, e)
    }
  }

  const copyHtmlToClipboard = () => {
    copy2Clipboard(true)
  }

  const copyDataUrlToClipboard = () => {
    copy2Clipboard(false)
  }

  return {urls, copyHtmlToClipboard, copyDataUrlToClipboard, onGenerateSvgHtml}
}
