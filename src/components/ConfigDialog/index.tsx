import {Icon} from '@iconify-icon/react'
import {CogIcon} from '@sanity/icons'
import {Card, Dialog, Flex} from '@sanity/ui'
import {useAppStore} from '../../store'
import {StyledBaseButton} from '../shared/SharedStyledComponents'
import Flip from './Flip'
import Rotate from './Rotate'
import Size from './Size'

const DialogHeader = () => (
  <Flex align='center' gap={3}>
    <CogIcon />
    <span>Configuration</span>
  </Flex>
)

interface DialogFooterProps {
  onClick: () => void
}
const DialogFooter = ({onClick}: DialogFooterProps) => (
  <Flex margin={2} align='center' justify='flex-end'>
    <StyledBaseButton
      text='Save Configuration'
      mode='bleed'
      tone='positive'
      fontSize={1}
      onClick={onClick}
    />
  </Flex>
)

interface ConfigDialogProps {}

const ConfigDialog = (props: ConfigDialogProps) => {
  const isConfigDialogOpen = useAppStore((s) => s.isConfigDialogOpen)
  const openConfigDialog = useAppStore((s) => s.openConfigDialog)
  const closeConfigDialog = useAppStore((s) => s.closeConfigDialog)
  const icon = useAppStore((s) => s.sanityValue?.icon)
  const flip = useAppStore((s) => s.getFlipValue())
  const rotate = useAppStore((s) => s.rotate)
  const size = useAppStore((s) => s.size)
  const previewBorder = useAppStore((s) => s.previewBorder)
  const saveConfiguration = useAppStore((s) => s.saveConfiguration)

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
          header={<DialogHeader />}
          footer={<DialogFooter onClick={saveConfiguration} />}
          onClose={closeConfigDialog}
          width={1}
        >
          <Flex direction='column' gap={3} marginY={4} marginX={[4, 4, 6, 7]}>
            <Flip />
            <Rotate />
            <Size />
          </Flex>
          {icon && (
            <Flex align='center' justify='center' paddingY={5} paddingX={2}>
              <Card
                tone={previewBorder ? 'positive' : 'default'}
                style={{transition: 'all .3s ease-in-out'}}
              >
                <Icon
                  icon={icon}
                  flip={flip}
                  rotate={rotate}
                  width={size?.width <= 300 ? size?.width : 300}
                  height={size?.height <= 300 ? size?.height : 300}
                  style={{display: 'block'}}
                />
              </Card>
            </Flex>
          )}
        </Dialog>
      )}
    </>
  )
}

export default ConfigDialog
