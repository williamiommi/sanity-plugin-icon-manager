import {CogIcon} from '@sanity/icons'
import {Card, Dialog, Flex} from '@sanity/ui'
import {useAppStore} from '../../store'
import CustomizeIcon from '../icons/CustomizeIcon'
import {StyledBaseButton} from '../shared/SharedStyledComponents'
import Color from './Color'
import Flip from './Flip'
import Preview from './Preview'
import Rotate from './Rotate'
import Size from './Size'

const DialogHeader = () => (
  <Flex align='center' gap={3}>
    <CogIcon />
    <span>Configuration</span>
  </Flex>
)

interface DialogFooterProps {
  onClear: () => void
  onSave: () => void
}
const DialogFooter = ({onClear, onSave}: DialogFooterProps) => (
  <Flex margin={2} align='center' justify='flex-end' gap={2}>
    <StyledBaseButton
      text='Clear Configuration'
      mode='bleed'
      tone='critical'
      fontSize={1}
      onClick={onClear}
    />
    <StyledBaseButton
      text='Save Configuration'
      mode='bleed'
      tone='positive'
      fontSize={1}
      onClick={onSave}
    />
  </Flex>
)

interface ConfigDialogProps {}

const ConfigDialog = (props: ConfigDialogProps) => {
  const isConfigDialogOpen = useAppStore((s) => s.isConfigDialogOpen)
  const openConfigDialog = useAppStore((s) => s.openConfigDialog)
  const closeConfigDialog = useAppStore((s) => s.closeConfigDialog)
  const clearConfiguration = useAppStore((s) => s.clearConfiguration)
  const saveConfiguration = useAppStore((s) => s.saveConfiguration)

  return (
    <>
      <StyledBaseButton
        mode='bleed'
        tone='positive'
        icon={<CustomizeIcon width={15} height={15} />}
        onClick={openConfigDialog}
        fontSize={1}
        text='Customize'
        padding={2}
      />
      {isConfigDialogOpen && (
        <Dialog
          id='config-dialog'
          header={<DialogHeader />}
          footer={<DialogFooter onClear={clearConfiguration} onSave={saveConfiguration} />}
          onClose={closeConfigDialog}
          width={1}
        >
          <Card marginY={4} marginX={[4, 4, 6, 7]}>
            <Flex direction='column' gap={3}>
              <Flip />
              <Rotate />
              <Size />
              <Color />
            </Flex>
            <Preview />
          </Card>
        </Dialog>
      )}
    </>
  )
}

export default ConfigDialog
