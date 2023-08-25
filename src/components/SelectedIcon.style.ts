import {RGB} from '@sanity/ui'
import styled from 'styled-components'

interface StyledSelectedIconProps {
  borderColor: string
}

const StyledSelectedIcon = styled.div<StyledSelectedIconProps>`
  position: relative;
  display: inline-block;
  border: 1px solid ${(props) => props.borderColor};
  padding: 10px;
`
interface StyledMaskProps {
  bgColor: RGB
}
export const StyledMask = styled.a<StyledMaskProps>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background-color: rgba(
    ${(props) => props.bgColor.r},
    ${(props) => props.bgColor.g},
    ${(props) => props.bgColor.b},
    0.8
  );
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`

export default StyledSelectedIcon
