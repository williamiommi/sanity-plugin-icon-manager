import {ReactNode, SVGProps} from 'react'

interface BorderIconProps extends SVGProps<SVGSVGElement> {}

export default function BorderIcon(props: BorderIconProps): ReactNode {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='M7 13v-2h2v2H7Zm4 4v-2h2v2h-2Zm0-4v-2h2v2h-2Zm0-4V7h2v2h-2Zm4 4v-2h2v2h-2ZM5 19h14V5H5v14Zm-2 2V3h18v18H3Z'
      />
    </svg>
  )
}
