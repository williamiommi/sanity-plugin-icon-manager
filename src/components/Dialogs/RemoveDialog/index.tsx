import {HelpCircleIcon} from '@sanity/icons'
import {Box, Dialog, Text} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'
import Footer from './Footer'

interface RemoveDialogProps {}

const RemoveDialog = (props: RemoveDialogProps) => {
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const isRemoveDialogOpen = useAppStoreContext((s) => s.isRemoveDialogOpen)

  if (!sanityValue?.icon || !isRemoveDialogOpen) return null

  return (
    <Dialog id='remove-dialog' header={<HelpCircleIcon />} footer={<Footer />} width={0}>
      <Box marginX={4} marginY={5}>
        <Text size={2}>Do you really want to remove the icon?</Text>
      </Box>
    </Dialog>
  )
}

export default RemoveDialog
