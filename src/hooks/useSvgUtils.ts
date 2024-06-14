import {useEffect, useMemo, useState} from 'react'
import {
  SvgData,
  buildSvgHtml,
  buildSvgUrls,
  copy2ClipboardSvgDataUrl,
  copy2ClipboardSvgHtml,
} from '../lib/svg-utils'
import {toastError, toastSuccess} from '../lib/toastUtils'
import {useAppStoreContext} from '../store/context'

const useSvgUtils = () => {
  const defaultSize = useAppStoreContext((s) => s.defaultSize)
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const inlineSvg = useAppStoreContext((s) => s.inlineSvg)
  const hFlip = useAppStoreContext((s) => s.hFlip)
  const vFlip = useAppStoreContext((s) => s.vFlip)
  const flip = useAppStoreContext((s) => s.flip)
  const rotate = useAppStoreContext((s) => s.rotate)
  const size = useAppStoreContext((s) => s.size)
  const color = useAppStoreContext((s) => s.color)
  const iconifyEndpoint = useAppStoreContext((s) => s.iconifyEndpoint)
  const sanityToast = useAppStoreContext((s) => s.sanityToast)

  const originalSvgData = useMemo(
    () => ({icon: sanityValue?.icon!, size: defaultSize}),
    [sanityValue, defaultSize],
  )

  const customSvgData = useMemo(
    () => ({icon: sanityValue?.icon!, size, rotate, hFlip, vFlip, flip, color, inlineSvg}),
    [sanityValue, size, rotate, hFlip, vFlip, flip, color, inlineSvg],
  )

  const [originalDownloadUrl, setOriginalDownloadUrl] = useState('')
  const [customDownloadUrl, setCustomDownloadUrl] = useState('')

  useEffect(() => {
    const setData = async () => {
      const originalUrls = await buildSvgUrls(iconifyEndpoint!, originalSvgData)
      const customUrls = await buildSvgUrls(iconifyEndpoint!, customSvgData)
      setOriginalDownloadUrl(originalUrls.downloadUrl)
      setCustomDownloadUrl(customUrls.downloadUrl)
    }
    setData()
  }, [iconifyEndpoint, customSvgData])

  const onGenerateSvgHtml = () => buildSvgHtml(customSvgData)

  const copy2Clipboard = async (isHtml: boolean, data: SvgData) => {
    try {
      if (isHtml) await copy2ClipboardSvgHtml(data)
      else await copy2ClipboardSvgDataUrl(data)
      toastSuccess({sanityToast, title: 'Copied to clipboard'})
    } catch (e: any) {
      toastError(sanityToast, e)
    }
  }

  const copyHtmlToClipboard = () => {
    copy2Clipboard(true, customSvgData)
  }

  const copyDataUrlToClipboard = () => {
    copy2Clipboard(false, customSvgData)
  }

  const copyOriginalHtmlToClipboard = () => {
    copy2Clipboard(true, originalSvgData)
  }

  const copyOriginalDataUrlToClipboard = () => {
    copy2Clipboard(false, originalSvgData)
  }

  return {
    originalDownloadUrl,
    copyOriginalHtmlToClipboard,
    copyOriginalDataUrlToClipboard,

    onGenerateSvgHtml,

    customDownloadUrl,
    copyHtmlToClipboard,
    copyDataUrlToClipboard,
  }
}

export default useSvgUtils
