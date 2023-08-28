import {EditIcon} from '@sanity/icons'
import {Card} from '@sanity/ui'
import styled from 'styled-components'
interface StyledSelectedIconProps {
  bgColor?: string
}

export const StyledSelectedIcon = styled(Card)<StyledSelectedIconProps>`
  position: relative;
  padding: 15px;
  color: ${(props) => props.bgColor || 'currentColor'};
`

export const StyledEditIcon = styled(EditIcon)`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.color.button.bleed.primary.enabled.fg};
`
