import {SVGProps} from 'react'

interface Props extends SVGProps<SVGSVGElement> {}

export default function DownloadIcon(props: Props) {
  return (
    <svg viewBox='0 0 20 20' width='20' height='20' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fill={props.color || 'currentColor'}
        d='M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z'
      />
      <path fill={props.color || 'currentColor'} d='M15 9h-4V1H9v8H5l5 6z' />
    </svg>
  )
}
