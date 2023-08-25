import {CogIcon} from '@sanity/icons'
import {Dialog} from '@sanity/ui'
import {useAppStore} from '../store'
import {StyledBaseButton} from './shared/ShartedStyledComponents'

interface ConfigDialogProps {}

const ConfigDialog = (props: ConfigDialogProps) => {
  const isConfigDialogOpen = useAppStore((s) => s.isConfigDialogOpen)
  const openConfigDialog = useAppStore((s) => s.openConfigDialog)
  const closeConfigDialog = useAppStore((s) => s.closeConfigDialog)
  return (
    <>
      <StyledBaseButton
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
