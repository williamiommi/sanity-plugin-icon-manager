import {set as patchSet, unset as patchUnset} from 'sanity'
import {StateCreator} from 'zustand'
import {buildSvgHtml, buildSvgUrls} from '../../lib/svg-utils'
import {toastError} from '../../lib/toastUtils'
import {IconManagerIconInfo} from '../../types/IconManagerQueryResponse'
import {ConfigureSlice} from './ConfigureSlice'
import {DialogSlice} from './DialogSlice'
import {PluginOptionsSlice} from './PluginOptionsSlice'
import {SanitySlice} from './SanitySlice'

export interface IconSlice {
  saveIcon: (item: IconManagerIconInfo) => void
  removeIcon: () => void
}

export const createIconSlice: StateCreator<
  IconSlice & SanitySlice & PluginOptionsSlice & DialogSlice & ConfigureSlice,
  [],
  [],
  IconSlice
> = (set, get) => ({
  saveIcon: async ({icon, iconName, collection}: IconManagerIconInfo) => {
    try {
      const size = {
        width: get().defaultSize!.width,
        height: get().defaultSize!.height,
      }

      const urls = buildSvgUrls(get().iconifyEndpoint!, {icon, size})

      const patches = []
      patches.push(patchSet(icon, ['icon']))

      const metadata = {
        downloadUrl: urls.downloadUrl,
        url: urls.url,
        collectionId: collection?.code,
        collectionName: collection?.name || '',
        iconName,
        size,
        hFlip: false,
        vFlip: false,
        flip: '',
        rotate: 0,
        palette: collection?.palette,
        author: {
          name: collection?.author.name,
          url: collection?.author.url,
        },
        license: {
          name: collection?.license.title,
          url: collection?.license.url,
        },
      }

      patches.push(patchSet(metadata, ['metadata']))
      const sanityPatch = get().sanityPatch
      if (sanityPatch) {
        await sanityPatch(patches)

        // if saveInlineOption is true, we need to store also the inline svg
        if (get().inlineSvgOption) {
          await sanityPatch(
            patchSet(await buildSvgHtml({icon, ...metadata}), ['metadata.inlineSvg']),
          )
        }

        get().closeSearchDialog()
        get().clearConfiguration()
      }
    } catch (e: any) {
      toastError(get().sanityToast, e)
    }
  },
  removeIcon: async () => {
    try {
      const sanityPatch = get().sanityPatch
      if (sanityPatch) {
        await sanityPatch(patchUnset())
        get().closeRemoveDialog()
      }
    } catch (e: any) {
      toastError(get().sanityToast, e)
    }
  },
})
