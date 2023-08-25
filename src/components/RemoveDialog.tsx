import {TrashIcon} from '@sanity/icons'
import {Box, Button, Dialog, Flex} from '@sanity/ui'
import styled from 'styled-components'
import {useAppStore} from '../store'

const StyledRemoveButton = styled(Button)`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`

interface RemoveDialogProps {}

const RemoveDialog = (props: RemoveDialogProps) => {
  const sanityValue = useAppStore((s) => s.sanityValue)
  const isRemoveDialogOpen = useAppStore((s) => s.isRemoveDialogOpen)
  const openRemoveDialog = useAppStore((s) => s.openRemoveDialog)
  const closeRemoveDialog = useAppStore((s) => s.closeRemoveDialog)
  const clearIcon = useAppStore((s) => s.clearIcon)

  if (!sanityValue) return null

  const DialogActions = () => (
    <Flex gap={2} justify='flex-end' margin={2}>
      <StyledRemoveButton text='Confirm' tone='positive' fontSize={1} onClick={clearIcon} />
      <StyledRemoveButton text='Cancel' tone='critical' fontSize={1} onClick={closeRemoveDialog} />
    </Flex>
  )

  return (
    <>
      <StyledRemoveButton
        text='Clear icon'
        mode='bleed'
        tone='critical'
        icon={<TrashIcon width={18} />}
        fontSize={1}
        onClick={openRemoveDialog}
      />
      {isRemoveDialogOpen && (
        <Dialog id='remove-dialog' footer={<DialogActions />} width={0}>
          <Box margin={4}>Do you really want to remove the icon?</Box>
        </Dialog>
      )}
    </>
  )
}

export default RemoveDialog
