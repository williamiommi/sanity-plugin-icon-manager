import {InfoOutlineIcon} from '@sanity/icons'
import {Button, Dialog} from '@sanity/ui'
import styled from 'styled-components'
import {useAppStore} from '../store'

const StyledInfoButton = styled(Button)`
  cursor: pointer;
  display: inline-flex;
  transition: all 0.3s ease-in-out;
`

interface InfoDialogProps {}

const InfoDialog = (props: InfoDialogProps) => {
  const isInfoDialogOpen = useAppStore((s) => s.isInfoDialogOpen)
  const openInfoDialog = useAppStore((s) => s.openInfoDialog)
  const closeInfoDialog = useAppStore((s) => s.closeInfoDialog)
  return (
    <>
      <StyledInfoButton
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
