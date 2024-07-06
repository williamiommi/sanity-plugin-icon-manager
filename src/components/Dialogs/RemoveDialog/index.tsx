import {Box, Dialog, Text} from '@sanity/ui'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../../lib/constants'
import {useAppStoreContext} from '../../../store/context'
import Footer from './Footer'
import Header from './Header'

interface RemoveDialogProps {}

const RemoveDialog = (props: RemoveDialogProps) => {
  const {t} = useTranslation(I18N_NAMESPACE)
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const isRemoveDialogOpen = useAppStoreContext((s) => s.isRemoveDialogOpen)

  if (!sanityValue?.icon || !isRemoveDialogOpen) return null

  return (
    <Dialog id='remove-dialog' header={<Header />} footer={<Footer />} width={0}>
      <Box marginX={4} marginBottom={5} marginTop={2}>
        <Text size={2}>{t('dialog.remove.icon.message')}</Text>
      </Box>
    </Dialog>
  )
}

export default RemoveDialog
