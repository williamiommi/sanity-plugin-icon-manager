import {SVGProps} from 'react'

interface Props extends SVGProps<SVGSVGElement> {}

export default function ClipboardIcon(props: Props) {
  return (
    <svg viewBox='0 0 24 24' width='24' height='24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g
        strokeWidth='2'
        strokeLinejoin='round'
        strokeLinecap='round'
        stroke='currentColor'
        fill='none'
      >
        <rect ry='1' rx='1' y='2' x='8' height='4' width='8' />
        <path d='M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M16 4h2a2 2 0 0 1 2 2v4m1 4H11' />
        <path d='m15 10l-4 4l4 4' />
      </g>
    </svg>
  )
}
