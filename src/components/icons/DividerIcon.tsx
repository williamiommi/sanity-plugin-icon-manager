import {SVGProps} from 'react'

interface Props extends SVGProps<SVGSVGElement> {}

export default function DividerIcon(props: Props) {
  return (
    <svg viewBox='0 0 32 32' height='101' width='101' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g fill='none'>
        <path
          d='M18 4.5A1.5 1.5 0 0 1 19.5 3h4A1.5 1.5 0 0 1 25 4.5V5l-3.5.5L18 5z'
          fill='#00D26A'
        />
        <path d='M2 8a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v4H2z' fill='#FFB02E' />
        <path
          d='M13 8.5A1.5 1.5 0 0 1 14.5 7h4A1.5 1.5 0 0 1 20 8.5V9l-3.5 1L13 9z'
          fill='#00A6ED'
        />
        <path d='M2 12a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v5H2z' fill='#F9C23C' />
        <path
          d='M7 12.5A1.5 1.5 0 0 1 8.5 11h4a1.5 1.5 0 0 1 1.5 1.5v.5l-3.5 1L7 13z'
          fill='#F8312F'
        />
        <path
          d='M2 16a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z'
          fill='#FCD53F'
        />
      </g>
    </svg>
  )
}