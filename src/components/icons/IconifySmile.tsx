import {ReactNode} from 'react'

export default function IconifySmile(): ReactNode {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
      <path
        fill='none'
        stroke='currentColor'
        strokeDasharray='60'
        strokeDashoffset='60'
        strokeLinecap='round'
        strokeWidth='2'
        d='M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z'
      >
        <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.5s' values='60;0' />
      </path>
      <g fill='currentColor' fillOpacity='0'>
        <path
          fillRule='evenodd'
          d='M12 18C15.125 18 17.3257 15.122 17 14.5C16.6728 13.875 15.5 16 12 16C8.5 16 7.3125 13.875 7 14.5C6.6875 15.125 8.875 18 12 18Z'
          clipRule='evenodd'
        >
          <animate
            fill='freeze'
            attributeName='fill-opacity'
            begin='1.0s'
            dur='0.2s'
            values='0;1'
          />
        </path>
        <path d='M9.5 9C9.5 8.48223 9.01777 8 8.5 8C7.98223 8 7.5 8.48223 7.5 9V10.4375C7.5 10.9553 7.98223 11.5 8.5 11.5C9.01777 11.5 9.5 11.0178 9.5 10.5V9Z'>
          <animate
            fill='freeze'
            attributeName='fill-opacity'
            begin='0.6s'
            dur='0.2s'
            values='0;1'
          />
        </path>
        <path d='M16.5 9C16.5 8.48223 16.0178 8 15.5 8C14.9822 8 14.5 8.48223 14.5 9V10.4375C14.5 10.9553 14.9822 11.5 15.5 11.5C16.0178 11.5 16.5 11.0178 16.5 10.5V9Z'>
          <animate
            fill='freeze'
            attributeName='fill-opacity'
            begin='0.8s'
            dur='0.2s'
            values='0;1'
          />
        </path>
      </g>
    </svg>
  )
}
