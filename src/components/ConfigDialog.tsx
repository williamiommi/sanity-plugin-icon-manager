import {CogIcon} from '@sanity/icons'
import {Dialog, Flex} from '@sanity/ui'
import {useAppStore} from '../store'
import {StyledBaseButton} from './shared/ShartedStyledComponents'

const DialogHeader = () => (
  <Flex align='center' gap={3}>
    <CogIcon />
    <span>Icon Configuration</span>
  </Flex>
)

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
        <Dialog id='config-dialog' header={<DialogHeader />} onClose={closeConfigDialog} width={0}>
          Ciao
        </Dialog>
      )}
    </>
  )
}

export default ConfigDialog
