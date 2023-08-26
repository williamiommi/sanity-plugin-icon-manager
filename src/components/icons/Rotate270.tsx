import {SVGProps} from 'react'

interface Rotate270Props extends SVGProps<SVGSVGElement> {}

const Rotate270 = (props: Rotate270Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width || 24}
    height={props.height || 24}
    viewBox='0 0 24 24'
  >
    <g fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth='2'>
      <path
        strokeDasharray='32'
        strokeDashoffset='32'
        d='M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5'
      >
        <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.6s' values='32;0' />
      </path>
      <path strokeDasharray='6' strokeDashoffset='6' d='M6 9L3 12M6 9L9 12'>
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='0.6s'
          dur='0.2s'
          values='6;0'
        />
      </path>
    </g>
  </svg>
)

export default Rotate270
