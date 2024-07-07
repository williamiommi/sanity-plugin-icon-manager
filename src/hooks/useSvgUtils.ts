import {useEffect, useState} from 'react'
import {toastError, toastSuccess} from '../lib/toast-utils'

import {
  buildSvgDataUrl,
  buildSvgUrls,
  copy2ClipboardSvgDataUrl,
  copy2ClipboardSvgHtml,
  SvgData,
} from '../lib/svg-utils'
import {useAppStoreContext} from '../store/context'
import usePluginTranslation from './usePluginTranslation'

interface Response {
  urls?: {url: string; downloadUrl: string}
  copyHtmlToClipboard: () => void
  copyDataUrlToClipboard: () => void
  downloadPng: () => void
}

export default function useSvgUtils(data: SvgData & {inlineSvg?: string}): Response {
  const {t} = usePluginTranslation()
  const iconifyEndpoint = useAppStoreContext((s) => s.iconifyEndpoint)
  const sanityToast = useAppStoreContext((s) => s.sanityToast)
  const [urls, setUrls] = useState<{url: string; downloadUrl: string}>()

  useEffect(() => {
    const updateUrls = async () => {
      setUrls(
        await buildSvgUrls(iconifyEndpoint!, {
          icon: data.icon,
          size: data.size,
          rotate: data.rotate,
          hFlip: data.hFlip,
          vFlip: data.vFlip,
          color: data.color,
        }),
      )
    }
    updateUrls()
  }, [iconifyEndpoint, data.icon, data.size, data.rotate, data.hFlip, data.vFlip, data.color])

  const copy2Clipboard = async (isHtml: boolean) => {
    try {
      if (isHtml) await copy2ClipboardSvgHtml(data)
      else await copy2ClipboardSvgDataUrl(data)
      toastSuccess({sanityToast, title: t(`${isHtml ? 'html' : 'base64'}.copied.label`)})
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

  const downloadPng = async () => {
    let img: HTMLImageElement | undefined
    let link: HTMLAnchorElement | undefined

    try {
      const base64Svg = await buildSvgDataUrl(data)

      // Create an Image object
      img = new Image()
      img.src = base64Svg
      img.style.display = 'none'

      img.onload = () => {
        try {
          // Create a canvas element
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')

          if (!ctx || !img) return

          // Set canvas size to the image size
          canvas.width = img.width
          canvas.height = img.height

          // Draw the SVG image onto the canvas
          ctx.drawImage(img, 0, 0)

          // Convert the canvas content to a Base64 PNG data URL
          const base64Png = canvas.toDataURL('image/png')

          if (base64Png === 'data:,') throw new Error(t('error.create.png'))

          // Create a link element
          link = document.createElement('a')
          link.href = base64Png // Directly set the base64 data as the href
          link.download = `${data.icon}.png` // Set the desired file name
          link.style.display = 'none' // Hide the link

          // Append link to body
          document.body.appendChild(link)
          link.click() // Simulate a click on the link
        } catch (e: unknown) {
          toastError(sanityToast, e)
        }
      }

      // append the image
      document.body.appendChild(img)
    } catch (e: unknown) {
      toastError(sanityToast, e)
    } finally {
      // Remove the link and image from the document
      if (img !== undefined) document.body.removeChild(img)
      if (link !== undefined) document.body.removeChild(link)
    }
  }

  return {urls, copyHtmlToClipboard, copyDataUrlToClipboard, downloadPng}
}
