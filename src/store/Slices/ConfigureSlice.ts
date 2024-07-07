import {RgbaColor} from 'react-colorful'
import {set as patchSet, unset as patchUnset} from 'sanity'
import {StateCreator} from 'zustand'
import {hexToRgba, isValidHex, rgbaToHex} from '../../lib/color-utils'
import {FALLBACK_SIZE} from '../../lib/constants'
import {getFlipValue} from '../../lib/iconify-utils'
import {buildSvgHtml, buildSvgUrls} from '../../lib/svg-utils'
import {toastError, toastSuccess, toastWarning} from '../../lib/toast-utils'
import {IconManagerColor, IconManagerSize} from '../../types/IconManagerType'
import {DialogSlice} from './DialogSlice'
import {PluginOptionsSlice} from './PluginOptionsSlice'
import {SanitySlice} from './SanitySlice'

const initialState = {
  hFlip: false,
  vFlip: false,
  flip: '',
  rotate: 0,
  size: {width: FALLBACK_SIZE, height: FALLBACK_SIZE},
  keepAspectRatio: false,
  color: undefined,
  previewBorder: false,
}

export interface ConfigureSlice {
  hFlip: boolean
  vFlip: boolean
  flip: string
  rotate: number
  size: IconManagerSize
  inlineSvg?: string
  keepAspectRatio: boolean
  previewBorder: boolean
  color?: IconManagerColor
  hasBeenCustomized: () => boolean
  clearConfiguration: () => void
  resetConfiguration: () => void
  setFlip: (hFlip: boolean, vFlip: boolean) => void
  toggleHFlip: () => void
  toggleVFlip: () => void
  setRotate: (rotate: number) => void
  setRotate0: () => void
  setRotate90: () => void
  setRotate180: () => void
  setRotate270: () => void
  setInlineSvg: (inlineSvg?: string) => void
  updateSize: (size: IconManagerSize) => void
  toggleKeepAspectRatio: () => void
  togglePreviewBorder: () => void
  setColor: (color: RgbaColor | string) => void
  clearColor: () => void
  saveConfiguration: () => void
}

export const createConfigureSlice: StateCreator<
  ConfigureSlice & SanitySlice & DialogSlice & PluginOptionsSlice,
  [],
  [],
  ConfigureSlice
> = (set, get) => ({
  ...initialState,
  hasBeenCustomized: () => {
    let count = 0
    const SV = get().sanityValue
    if (!SV || !SV.metadata) return false
    if (SV.metadata.hFlip) count++
    if (SV.metadata.vFlip) count++
    if (SV.metadata.rotate > 0) count++
    if (SV.metadata.size.width !== get().defaultSize?.width) count++
    if (SV.metadata.size.height !== get().defaultSize?.height) count++
    if (SV.metadata.color && SV.metadata.color.hex) count++
    return count > 0
  },
  clearConfiguration: () => set({...initialState, size: {...get().defaultSize!}}),
  resetConfiguration: () => {
    const sanityValue = get().sanityValue
    set(() => ({
      hFlip: sanityValue?.metadata.hFlip,
      vFlip: sanityValue?.metadata.vFlip,
      flip: getFlipValue(sanityValue?.metadata.hFlip, sanityValue?.metadata.vFlip),
      rotate: sanityValue?.metadata.rotate,
      size: sanityValue?.metadata.size,
      color: sanityValue?.metadata.color,
      inlineSvg: sanityValue?.metadata.inlineSvg,
      previewBorder: false,
      keepAspectRatio: false,
    }))
  },
  setFlip: (hFlip, vFlip) => set(() => ({hFlip, vFlip, flip: getFlipValue(hFlip, vFlip)})),
  toggleHFlip: () => set((s) => ({hFlip: !s.hFlip, flip: getFlipValue(!s.hFlip, get().vFlip)})),
  toggleVFlip: () => set((s) => ({vFlip: !s.vFlip, flip: getFlipValue(get().hFlip, !s.vFlip)})),
  setRotate: (rotate: number) => set(() => ({rotate})),
  setRotate0: () => set(() => ({rotate: 0})),
  setRotate90: () => set((s) => ({rotate: s.rotate === 1 ? 0 : 1})),
  setRotate180: () => set((s) => ({rotate: s.rotate === 2 ? 0 : 2})),
  setRotate270: () => set((s) => ({rotate: s.rotate === 3 ? 0 : 3})),
  setInlineSvg: (inlineSvg?: string) => set(() => ({inlineSvg})),
  updateSize: (size: IconManagerSize) => set(() => ({size})),
  toggleKeepAspectRatio: () => set((s) => ({keepAspectRatio: !s.keepAspectRatio})),
  togglePreviewBorder: () => set((s) => ({previewBorder: !s.previewBorder})),
  setColor: (color: RgbaColor | string) =>
    set(() => {
      let hex: string
      let rgba: RgbaColor
      if (typeof color === 'string') {
        hex = color
        rgba = hexToRgba(color)
      } else {
        rgba = color
        hex = rgbaToHex(color)
      }
      return {color: {hex, rgba}}
    }),
  clearColor: () => set((s) => ({color: undefined})),
  saveConfiguration: async () => {
    try {
      const sanityPatch = get().sanityPatch
      if (sanityPatch) {
        const sanityValue = get().sanityValue
        if (!sanityValue) throw Error('The stored value is broken')

        const patches = []

        if (get().hFlip !== sanityValue.metadata.hFlip)
          patches.push(patchSet(get().hFlip, ['metadata.hFlip']))
        if (get().vFlip !== sanityValue.metadata.vFlip)
          patches.push(patchSet(get().vFlip, ['metadata.vFlip']))
        if (get().flip !== sanityValue.metadata.flip)
          patches.push(patchSet(get().flip, ['metadata.flip']))
        if (get().rotate !== sanityValue.metadata.rotate)
          patches.push(patchSet(get().rotate, ['metadata.rotate']))
        if (get().size.width !== sanityValue.metadata.size.width)
          patches.push(patchSet(get().size?.width, ['metadata.size.width']))
        if (get().size.height !== sanityValue.metadata.size.height)
          patches.push(patchSet(get().size?.height, ['metadata.size.height']))

        const color = get().color
        const sanityColor = sanityValue.metadata.color
        // CASE 1: new color and no previous color saved
        if (!sanityColor && color) {
          if (isValidHex(color.hex)) {
            patches.push(patchSet(color, ['metadata.color']))
          } else {
            toastError(get().sanityToast, `${color.hex} is not a valid color`)
            return
          }
        }
        // CASE 2: previous color and new color removed
        else if (sanityColor && !color) {
          patches.push(patchUnset(['metadata.color']))
        }
        // CASE 3: both populated and not equals
        else if (color && sanityColor && color.hex !== sanityColor.hex) {
          if (isValidHex(color.hex)) {
            patches.push(patchSet(color.hex, ['metadata.color.hex']))
            patches.push(patchSet(color.rgba, ['metadata.color.rgba']))
          } else {
            toastError(get().sanityToast, `${color.hex} is not a valid color`)
            return
          }
        }

        // check for inlineSvg option
        const currentInlineSvg = get().inlineSvg
        const prevInlineSvg = sanityValue.metadata.inlineSvg
        if (!currentInlineSvg && prevInlineSvg) {
          patches.push(patchUnset(['metadata.inlineSvg']))
        }
        if (
          (currentInlineSvg && !prevInlineSvg) ||
          (currentInlineSvg && currentInlineSvg !== prevInlineSvg) ||
          (currentInlineSvg && patches.length > 0)
        ) {
          patches.push(
            patchSet(await buildSvgHtml({icon: sanityValue.icon, ...get()}), [
              'metadata.inlineSvg',
            ]),
          )
        }

        // if we have some patches, update the document
        if (patches.length > 0) {
          // update urls too if something has changed
          const urls = buildSvgUrls(get().iconifyEndpoint!, {
            icon: sanityValue.icon!,
            ...get(),
          })

          patches.push(patchSet(urls.downloadUrl, ['metadata.downloadUrl']))
          patches.push(patchSet(urls.url, ['metadata.url']))

          await sanityPatch(patches)
          get().closeConfigDialog()
          toastSuccess({sanityToast: get().sanityToast, title: 'Configuration Saved'})
        } else {
          toastWarning({
            sanityToast: get().sanityToast,
            title: 'Nothing to update',
            description: `Configuration didn't change`,
          })
        }
      }
    } catch (e: unknown) {
      toastError(get().sanityToast, e)
    }
  },
})
