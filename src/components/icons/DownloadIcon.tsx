import {SVGProps} from 'react'

interface DownloadIconProps extends SVGProps<SVGSVGElement> {}

const DownloadIcon = (props: DownloadIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width || 20}
    height={props.height || 20}
    viewBox='0 0 20 20'
    style={{display: 'block'}}
  >
    <path
      fill={props.color || 'currentColor'}
      d='M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z'
    />
    <path fill={props.color || 'currentColor'} d='M15 9h-4V1H9v8H5l5 6z' />
  </svg>
)

export default DownloadIcon
