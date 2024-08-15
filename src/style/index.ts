import {Badge, Card, Flex, Text} from '@sanity/ui'
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

export const StyledChangeIndicatorWrapper = styled.div`
  display: flex;
  height: 100%;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  * {
    height: 100%;
  }
`

export const TextFilterCollection = styled(Text)`
  z-index: 2;
  span {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: clip;
    width: 95%;
  }
`

// ###
// COLOR PICKER UI
// ###
export const StyledColorPicker = styled(Card)`
  border-radius: 6px !important;

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

export const StyledColorPaletteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 2px;
  max-width: 272px;
  background-color: ${(p) => p.theme.color.base.border};
`

interface StyledColorPaletteBoxProps {
  $bgColor: string
}
export const StyledColorPaletteBox = styled.button<StyledColorPaletteBoxProps>`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background: ${(p) => p.$bgColor};
  cursor: pointer;
  border: 1px solid ${(p) => p.theme.color.base.fg};
`
// ###
// COLOR PICKER UI
// ###

// ###
// ICON MENU
// ###
const isMobile = (mediaIndex: number) => mediaIndex < 2

const StyledBaseLeftIconMenu = styled(Flex)`
  width: ${(props) => (isMobile(props.theme.mediaIndex) ? '100%' : '350px')};
`
const StyledBaseRightIconMenu = styled(Flex)`
  width: ${(props) => (isMobile(props.theme.mediaIndex) ? '100%' : '150px')};
`

export const StyledIconMenu = styled(Flex)`
  width: ${(props) => (isMobile(props.theme.mediaIndex) ? '250px' : '500px')};
`

export const StyledIconMenuInfoTitleWrapper = styled(StyledBaseLeftIconMenu)`
  order: ${(props) => (isMobile(props.theme.mediaIndex) ? 1 : 'unset')};
`

export const StyledIconMenuActionsTitleWrapper = styled(StyledBaseRightIconMenu)`
  order: ${(props) => (isMobile(props.theme.mediaIndex) ? 3 : 'unset')};
`

export const StyledIconMenuInfoWrapper = styled(StyledBaseLeftIconMenu)`
  order: ${(props) => (isMobile(props.theme.mediaIndex) ? 2 : 'unset')};
`

export const StyledIconMenuInfoCard = styled(Card)`
  width: ${(props) => (isMobile(props.theme.mediaIndex) ? '100%' : '98%')};
`

export const StyledIconMenuActionsWrapper = styled(StyledBaseRightIconMenu)`
  order: ${(props) => (isMobile(props.theme.mediaIndex) ? 4 : 'unset')};
`

export const StyledIconMenuInfoValue = styled(Text)`
  width: ${(props) => (isMobile(props.theme.mediaIndex) ? '100%' : '250px')};
`
// ###
// ICON MENU
// ###
