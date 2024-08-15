import {ReactNode, SVGProps} from 'react'

interface Rotate90Props extends SVGProps<SVGSVGElement> {}

export default function Rotate90(props: Rotate90Props): ReactNode {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width || 24}
      height={props.height || 24}
      viewBox='0 0 24 24'
    >
      <g fill='none' stroke={props.color || 'currentColor'} strokeLinecap='round' strokeWidth='2'>
        <path strokeDasharray='14' strokeDashoffset='14' d='M12 6C15.3137 6 18 8.68629 18 12V14.5'>
          <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.2s' values='14;0' />
        </path>
        <path strokeDasharray='6' strokeDashoffset='6' d='M18 15L21 12M18 15L15 12'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.2s'
            dur='0.2s'
            values='6;0'
          />
        </path>
      </g>
    </svg>
  )
}
