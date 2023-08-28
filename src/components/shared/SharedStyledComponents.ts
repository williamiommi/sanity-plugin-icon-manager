import {Button, Grid} from '@sanity/ui'
import styled from 'styled-components'

export const StyledBaseButton = styled(Button)`
  cursor: pointer;
  display: inline-flex;
  transition: all 0.3s ease-in-out;
`

export const StyledPaginationButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  font-size: 15px;
`

export const StyledGridForm = styled(Grid)`
  grid-template-columns: 110px 1fr;
`

interface StyledIconButtonProps {
  width?: string
  height?: string
  padding?: string
  margin?: string
  mode?: 'ghost' | 'bleed' | 'default'
  tone?: 'primary' | 'caution'
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || props.width || 'auto'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  background: none;
  color: ${(props) => props.theme.color.button.bleed.primary.enabled.fg};
  border: 1px solid
    ${(props) => (props.mode === 'ghost' ? props.theme.color.card.enabled.border : 'transparent')};
  &:hover {
    color: ${(props) =>
      props.mode === 'ghost' ? props.theme.color.button.ghost.primary.hovered.fg : ''};
    background-color: ${(props) =>
      props.mode === 'ghost'
        ? props.theme.color.button.ghost.primary.hovered.bg2
        : props.theme.color.button.bleed.primary.enabled.bg2};
    border-color: ${(props) =>
      props.mode === 'ghost' ? props.theme.color.button.ghost.primary.hovered.bg2 : 'transparent'};
  }
`

export const StyledIconLink = StyledIconButton.withComponent('a')
