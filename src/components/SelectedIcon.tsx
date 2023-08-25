import {Icon} from '@iconify-icon/react'
import {DownloadIcon} from '@sanity/icons'
import {hexToRgb, useTheme} from '@sanity/ui'
import {useAppStore} from '../store'
import StyledSelectedIcon, {StyledMask} from './SelectedIcon.style'

interface SelectedIconProps {}

const SelectedIcon = (props: SelectedIconProps) => {
  const {sanity: theme} = useTheme()
  const sanityValue = useAppStore((s) => s.sanityValue)

  if (!sanityValue?.icon) return null

  return (
    <StyledSelectedIcon borderColor={theme.color.card.hovered.border}>
      <StyledMask bgColor={hexToRgb(theme.color.base.fg)} role='button'>
        <DownloadIcon width={30} height={30} color={theme.color.base.bg} />
      </StyledMask>
      <Icon icon={sanityValue?.icon} width={40} height={40} style={{display: 'block'}} />
    </StyledSelectedIcon>
  )
}

export default SelectedIcon
