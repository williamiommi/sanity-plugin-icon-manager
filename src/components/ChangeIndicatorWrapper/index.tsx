import {ChangeIndicator, ChangeIndicatorProps} from 'sanity'
import S from './Styled'

const ChangeIndicatorWrapper = (props: ChangeIndicatorProps) => {
  return (
    <S.ChangeIndicatorWrapper>
      <ChangeIndicator
        path={props.path}
        isChanged={props.isChanged}
        hasFocus={props.hasFocus}
        withHoverEffect={props.withHoverEffect}
      />
    </S.ChangeIndicatorWrapper>
  )
}

export default ChangeIndicatorWrapper
