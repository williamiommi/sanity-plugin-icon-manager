import {Badge} from '@sanity/ui'
import styled from 'styled-components'

export const StyledFilterBadge = styled(Badge)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -5;
  right: -5;
  z-index: 1;
  border-radius: 50%;
  width: 20;
  height: 20;
  padding: 0;
`
