import {Badge} from '@sanity/ui'
import styled from 'styled-components'

export const PaginationButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  font-size: 15px;
`

export const StyledFilterBadge = styled(Badge)`
  position: absolute;
  display: flex !important;
  align-items: center;
  justify-content: center;
  top: -5px;
  right: -5px;
  z-index: 1;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 0;
`
