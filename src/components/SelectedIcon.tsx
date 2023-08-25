import {Icon} from '@iconify-icon/react'
import {DownloadIcon} from '@sanity/icons'
import {Flex, hexToRgb, useTheme} from '@sanity/ui'
import {useAppStore} from '../store'
import ConfigDialog from './ConfigDialog'
import InfoDialog from './InfoDialog'
import StyledSelectedIcon, {StyledMask} from './SelectedIcon.style'

interface SelectedIconProps {}

const SelectedIcon = (props: SelectedIconProps) => {
  const {sanity: theme} = useTheme()
  const sanityValue = useAppStore((s) => s.sanityValue)

  if (!sanityValue?.icon) return null

  return (
    <Flex gap={1}>
      <StyledSelectedIcon borderColor={theme.color.card.hovered.border}>
        <StyledMask
          bgColor={hexToRgb(theme.color.base.fg)}
          role='link'
          href={sanityValue.downloadUrl}
        >
          <DownloadIcon width={30} height={30} color={theme.color.base.bg} />
        </StyledMask>
        <Icon icon={sanityValue?.icon} width={40} height={40} style={{display: 'block'}} />
      </StyledSelectedIcon>
      <Flex direction='column' justify='flex-end' align='flex-start'>
        <InfoDialog />
        <ConfigDialog />
      </Flex>
    </Flex>
  )
}

export default SelectedIcon
