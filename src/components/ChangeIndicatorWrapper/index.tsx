import {ChangeIndicator, ChangeIndicatorProps} from 'sanity'
import {StyledChangeIndicatorWrapper} from './Styled'

const ChangeIndicatorWrapper = (props: ChangeIndicatorProps) => {
  return (
    <StyledChangeIndicatorWrapper>
      <ChangeIndicator
        path={props.path}
        isChanged={props.isChanged}
        hasFocus={props.hasFocus}
        withHoverEffect={props.withHoverEffect}
      />
    </StyledChangeIndicatorWrapper>
  )
}

export default ChangeIndicatorWrapper
