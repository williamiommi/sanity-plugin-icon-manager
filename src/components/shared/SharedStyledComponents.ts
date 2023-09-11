import {Button} from '@sanity/ui'
import styled from 'styled-components'

export const StyledBaseButton = styled(Button)`
  cursor: pointer;
  display: inline-flex;
  transition: all 0.3s ease-in-out;
`

interface StyledIconButtonProps {
  width?: string
  height?: string
  padding?: string
  margin?: string
  mode?: 'ghost' | 'bleed' | 'default'
}

const backgroundColorHoverSwitch = (mode?: 'ghost' | 'bleed' | 'default', theme?: any): string => {
  switch (mode) {
    case 'ghost':
      return theme.color.button.ghost.primary.hovered.bg2
    case 'default':
      return theme.color.button.ghost.primary.hovered.bg
    default:
      return theme.color.button.bleed.primary.enabled.bg2
  }
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
  background: ${(props) =>
    props.mode === 'default' ? props.theme.color.button.ghost.primary.hovered.bg2 : 'transparent'};
  color: ${(props) =>
    props.mode === 'default'
      ? props.theme.color.button.ghost.primary.hovered.fg
      : props.theme.color.button.bleed.primary.enabled.fg};
  border: 1px solid
    ${(props) => (props.mode === 'ghost' ? props.theme.color.card.enabled.border : 'transparent')};
  border-radius: 2px;
  &:hover {
    color: ${(props) =>
      props.mode === 'ghost' ? props.theme.color.button.ghost.primary.hovered.fg : ''};
    background-color: ${(props) => backgroundColorHoverSwitch(props.mode, props.theme)};
    border-color: ${(props) =>
      props.mode === 'ghost' ? props.theme.color.button.ghost.primary.hovered.bg2 : 'transparent'};
  }
`

export const StyledIconLink = StyledIconButton.withComponent('a')
