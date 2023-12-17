import {set as patchSet, unset as patchUnset} from 'sanity'
import {StateCreator} from 'zustand'
import {INITIAL_HEIGHT, INITIAL_WIDTH} from '../../lib/constants'
import {
  generateInitialSvgDownloadUrl,
  generateInitialSvgHttpUrl,
  generateSvgHtml,
} from '../../lib/svgUtils'
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
      const patches = []
      patches.push(patchSet(icon, ['icon']))
      patches.push(
        patchSet(
          {
            downloadUrl: generateInitialSvgDownloadUrl(get().iconifyEndpoint!, icon),
            url: generateInitialSvgHttpUrl(get().iconifyEndpoint!, icon),
            collectionId: collection?.code,
            collectionName: collection?.name || '',
            iconName,
            size: {width: INITIAL_WIDTH, height: INITIAL_HEIGHT},
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
          },
          ['metadata'],
        ),
      )
      const sanityPatch = get().sanityPatch
      if (sanityPatch) {
        await sanityPatch(patches)

        // if saveInlineOption is true, we need to store also the inline svg
        if (get().inlineSvgOption) {
          await sanityPatch(patchSet(await generateSvgHtml(get()), ['metadata.inlineSvg']))
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
