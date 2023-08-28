import {Card} from '@sanity/ui'
import styled from 'styled-components'

interface StyledSelectedIconProps {
  bgColor?: string
}

export const StyledSelectedIcon = styled(Card)<StyledSelectedIconProps>`
  padding: 10px;
  color: ${(props) => props.bgColor || 'currentColor'};
`
