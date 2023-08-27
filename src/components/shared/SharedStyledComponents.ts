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