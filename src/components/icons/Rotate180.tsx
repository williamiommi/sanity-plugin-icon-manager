import {ReactNode, SVGProps} from 'react'

interface Rotate180Props extends SVGProps<SVGSVGElement> {}

export default function Rotate180(props: Rotate180Props): ReactNode {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width || 24}
      height={props.height || 24}
      viewBox='0 0 24 24'
    >
      <g fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth='2'>
        <path
          strokeDasharray='24'
          strokeDashoffset='24'
          d='M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18H9.5'
        >
          <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.4s' values='24;0' />
        </path>
        <path strokeDasharray='6' strokeDashoffset='6' d='M9 18L12 21M9 18L12 15'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.4s'
            dur='0.2s'
            values='6;0'
          />
        </path>
      </g>
    </svg>
  )
}
