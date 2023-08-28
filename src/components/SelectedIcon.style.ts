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

export const StyledEditIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  color: ${(props) => props.theme.color.button.bleed.primary.enabled.fg};
  cursor: help;
`
