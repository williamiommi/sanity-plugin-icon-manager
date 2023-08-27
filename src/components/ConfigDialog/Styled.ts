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
