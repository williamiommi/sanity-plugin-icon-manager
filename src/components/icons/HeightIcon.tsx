import {SVGProps} from 'react'

interface HeightIconProps extends SVGProps<SVGSVGElement> {}

const HeightIcon = (props: HeightIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width || 24}
    height={props.height || 24}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill={props.color || 'currentColor'}
      d='M11 17.175V6.825l-.9.9Q9.825 8 9.412 8T8.7 7.7q-.275-.275-.275-.7t.275-.7l2.6-2.6q.15-.15.325-.213T12 3.425q.2 0 .375.063t.325.212l2.6 2.6q.275.275.275.688T15.3 7.7q-.3.3-.713.3t-.712-.3L13 6.825v10.35l.9-.9q.275-.275.688-.275t.712.3q.275.275.275.7t-.275.7l-2.6 2.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.063T11.3 20.3l-2.6-2.6q-.275-.275-.287-.688T8.7 16.3q.275-.275.7-.275t.7.275l.9.875Z'
    />
  </svg>
)

export default HeightIcon
