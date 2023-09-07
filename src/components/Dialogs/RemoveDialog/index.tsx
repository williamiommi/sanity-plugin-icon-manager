import {TrashIcon} from '@sanity/icons'
import {Box, Dialog, Flex, Text} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'
import {StyledBaseButton} from '../../shared/SharedStyledComponents'

interface RemoveDialogProps {}

const RemoveDialog = (props: RemoveDialogProps) => {
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const sanityUserCanEdit = useAppStoreContext((s) => s.sanityUserCanEdit)
  const isRemoveDialogOpen = useAppStoreContext((s) => s.isRemoveDialogOpen)
  const openRemoveDialog = useAppStoreContext((s) => s.openRemoveDialog)
  const closeRemoveDialog = useAppStoreContext((s) => s.closeRemoveDialog)
  const clearIcon = useAppStoreContext((s) => s.clearIcon)

  if (!sanityValue?.icon) return null

  const DialogActions = () => (
    <Flex gap={2} justify='flex-end' margin={2}>
      <StyledBaseButton
        text='Confirm'
        mode='bleed'
        tone='positive'
        fontSize={1}
        onClick={clearIcon}
      />
      <StyledBaseButton
        text='Cancel'
        mode='bleed'
        tone='critical'
        fontSize={1}
        onClick={closeRemoveDialog}
      />
    </Flex>
  )

  return (
    <>
      <StyledBaseButton
        text='Clear icon'
        mode='bleed'
        tone='critical'
        icon={<TrashIcon width={18} />}
        fontSize={1}
        onClick={openRemoveDialog}
        disabled={!sanityUserCanEdit}
      />
      {isRemoveDialogOpen && (
        <Dialog id='remove-dialog' footer={<DialogActions />} width={0}>
          <Box margin={4}>
            <Text size={1}>Do you really want to remove the icon?</Text>
          </Box>
        </Dialog>
      )}
    </>
  )
}

export default RemoveDialog
