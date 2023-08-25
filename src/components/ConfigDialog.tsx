import {CogIcon} from '@sanity/icons'
import {Button, Dialog} from '@sanity/ui'
import styled from 'styled-components'
import {useAppStore} from '../store'

const StyledConfigButton = styled(Button)`
  cursor: pointer;
  display: inline-flex;
  transition: all 0.3s ease-in-out;
`

interface ConfigDialogProps {}

const ConfigDialog = (props: ConfigDialogProps) => {
  const isConfigDialogOpen = useAppStore((s) => s.isConfigDialogOpen)
  const openConfigDialog = useAppStore((s) => s.openConfigDialog)
  const closeConfigDialog = useAppStore((s) => s.closeConfigDialog)
  return (
    <>
      <StyledConfigButton
        mode='bleed'
        tone='positive'
        icon={<CogIcon width={18} />}
        onClick={openConfigDialog}
        fontSize={1}
        text='Config'
        padding={2}
      />
      {isConfigDialogOpen && (
        <Dialog
          id='config-dialog'
          header='Icon Configuration'
          onClose={closeConfigDialog}
          width={0}
        >
          Ciao
        </Dialog>
      )}
    </>
  )
}

export default ConfigDialog
