import {SVGProps} from 'react'

interface WidthIconProps extends SVGProps<SVGSVGElement> {}

const WidthIcon = (props: WidthIconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' {...props}>
    <path
      fill={props.color || 'currentColor'}
      d='m7 16l-4-4l4-4l1.425 1.4l-1.6 1.6h10.35L15.6 9.4L17 8l4 4l-4 4l-1.4-1.4l1.575-1.6H6.825L8.4 14.6L7 16Z'
    />
  </svg>
)

export default WidthIcon
