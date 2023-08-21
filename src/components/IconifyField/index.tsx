import {FieldProps} from 'sanity'

type IconifyFieldProps = FieldProps & {}

const IconifyField = (props: IconifyFieldProps) => {
  return <>{props.renderDefault({...props, children: undefined})}</>
}

export default IconifyField
