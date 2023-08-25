import {InfoOutlineIcon} from '@sanity/icons'
import {Dialog} from '@sanity/ui'
import {useAppStore} from '../store'
import {StyledBaseButton} from './shared/ShartedStyledComponents'

interface InfoDialogProps {}

const InfoDialog = (props: InfoDialogProps) => {
  const isInfoDialogOpen = useAppStore((s) => s.isInfoDialogOpen)
  const openInfoDialog = useAppStore((s) => s.openInfoDialog)
  const closeInfoDialog = useAppStore((s) => s.closeInfoDialog)
  return (
    <>
      <StyledBaseButton
        mode='bleed'
        tone='primary'
        icon={<InfoOutlineIcon width={18} />}
        onClick={openInfoDialog}
        fontSize={1}
        text='Info'
        padding={2}
      />
      {isInfoDialogOpen && (
        <Dialog id='info-dialog' header='Info' onClose={closeInfoDialog} width={0}>
          Ciao
        </Dialog>
      )}
    </>
  )
}

export default InfoDialog
