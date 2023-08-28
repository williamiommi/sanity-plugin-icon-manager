import {Card} from '@sanity/ui'
import styled from 'styled-components'

export const StyledHeading = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: bold;
  width: 100px;
`

export const StyledSizeInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 4px 1px 4px 4px;
  border: 1px solid ${(p) => p.theme.color.card.enabled.border};
  border-radius: 2px;
  font-size: 0.75rem;
  background-color: transparent;
`

export const StyledColorPicker = styled(Card)`
  .react-colorful {
    margin-bottom: 10px;
    width: 100%;
  }

  .react-colorful__hue {
    order: -1;
  }

  .react-colorful__saturation {
    margin: 12px 0;
    border-radius: 0;
    border: none;
  }

  .react-colorful__alpha,
  .react-colorful__hue {
    height: 14px;
    border-radius: 0;
  }

  .react-colorful__saturation-pointer {
    width: 22px;
    height: 22px;
  }

  .react-colorful__alpha-pointer,
  .react-colorful__hue-pointer {
    width: 15px;
    height: 15px;
  }
`
