import {ReactNode} from 'react'
import {ChangeIndicator, ChangeIndicatorProps} from 'sanity'

import {StyledChangeIndicatorWrapper} from '../../style'

export default function ChangeIndicatorWrapper(props: ChangeIndicatorProps): ReactNode {
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
