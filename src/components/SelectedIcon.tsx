import {Card, Flex, Text, Tooltip} from '@sanity/ui'
import {useAppStore} from '../store'
import ConfigDialog from './ConfigDialog'
import IconPreview from './IconPreview'
import InfoDialog from './InfoDialog'
import {StyledEditIcon, StyledSelectedIcon} from './SelectedIcon.style'
import CustomizeIcon from './icons/CustomizeIcon'

interface SelectedIconProps {}

const SelectedIcon = (props: SelectedIconProps) => {
  const SV = useAppStore((s) => s.sanityValue)
  const hasBeenCustomized = useAppStore((s) => s.hasBeenCustomized())

  if (!SV?.icon) return null

  return (
    <Flex gap={1}>
      <StyledSelectedIcon border bgColor={SV.metadata.color?.hex}>
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
        <IconPreview value={SV} />
      </StyledSelectedIcon>
      <Flex direction='column' justify='flex-end' align='flex-start'>
        <InfoDialog />
        <ConfigDialog />
      </Flex>
    </Flex>
  )
}

export default SelectedIcon
