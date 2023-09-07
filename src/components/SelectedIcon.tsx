import {Card, Flex, Text, Tooltip} from '@sanity/ui'
import {useAppStoreContext} from '../store/context'
import ConfigDialog from './Dialogs/ConfigDialog'
import InfoDialog from './Dialogs/InfoDialog'
import IconPreview from './IconPreview'
import {StyledEditIcon, StyledSelectedIcon} from './SelectedIcon.style'
import CustomizeIcon from './icons/CustomizeIcon'

interface SelectedIconProps {}

const SelectedIcon = (props: SelectedIconProps) => {
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const hasBeenCustomized = useAppStoreContext((s) => s.hasBeenCustomized())

  if (!sanityValue?.icon) return null

  return (
    <Flex gap={1}>
      <StyledSelectedIcon border bgColor={sanityValue.metadata?.color?.hex}>
        {hasBeenCustomized && (
          <Tooltip
            content={
              <Card padding={2}>
                <Text size={1}>Icon has been customized</Text>
              </Card>
            }
          >
            <StyledEditIcon>
              <CustomizeIcon width='100%' height='100%' />
            </StyledEditIcon>
          </Tooltip>
        )}
        <IconPreview value={sanityValue} />
      </StyledSelectedIcon>
      <Flex direction='column' justify='flex-end' align='flex-start'>
        <InfoDialog />
        <ConfigDialog />
      </Flex>
    </Flex>
  )
}

export default SelectedIcon
