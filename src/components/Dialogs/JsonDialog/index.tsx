/* eslint-disable react/jsx-no-bind */
import {Box, Button, Dialog} from '@sanity/ui'
import {ReactElement} from 'react'

import usePluginTranslation from '../../../hooks/usePluginTranslation'
import {copy2Clipboard} from '../../../lib/svg-utils'
import {toastError, toastSuccess} from '../../../lib/toast-utils'
import {useAppStoreContext} from '../../../store/context'
import BaseTooltip from '../../BaseTooltip'
import ClipboardIcon from '../../icons/ClipboardIcon'
import Header from './Header'

export default function JsonDialog(): ReactElement | null {
  const {t} = usePluginTranslation()
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const sanityToast = useAppStoreContext((s) => s.sanityToast)
  const isJsonDialogOpen = useAppStoreContext((s) => s.isJsonDialogOpen)
  const closeJsonDialog = useAppStoreContext((s) => s.closeJsonDialog)

  const copyJsonToClipboard = async () => {
    try {
      await copy2Clipboard(JSON.stringify(sanityValue))
      toastSuccess({sanityToast, title: t('dialog.json.copied.label')})
    } catch (e: unknown) {
      toastError(sanityToast, e)
    }
  }

  if (!sanityValue?.icon || !isJsonDialogOpen) return null

  return (
    <Dialog
      id='json-dialog'
      header={<Header />}
      footer={
        <BaseTooltip portal content={t('dialog.json.copy.label')}>
          <Button
            mode='bleed'
            tone='default'
            icon={<ClipboardIcon width={25} height={25} />}
            style={{position: 'absolute', bottom: '7px', right: '7px', cursor: 'pointer'}}
            onClick={copyJsonToClipboard}
          />
        </BaseTooltip>
      }
      width={2}
      onClose={closeJsonDialog}
    >
      <Box marginX={4} marginBottom={5} marginTop={2} style={{maxHeight: '600px'}}>
        <pre style={{whiteSpace: 'pre-wrap', padding: '30px'}}>
          {JSON.stringify(sanityValue, null, 2)}
        </pre>
      </Box>
    </Dialog>
  )
}
