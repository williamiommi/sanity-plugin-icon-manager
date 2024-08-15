import {ReactNode, SVGProps} from 'react'

interface HeightLightIconProps extends SVGProps<SVGSVGElement> {}

export default function HeightLightIcon(props: HeightLightIconProps): ReactNode {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width || 20}
      height={props.height || 20}
      viewBox='0 0 20 20'
    >
      <path
        fill='currentColor'
        d='M4 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H4Zm0 15a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H4ZM9.146 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L10 6.707v6.586l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L9 13.293V6.707L7.854 7.854a.5.5 0 1 1-.708-.708l2-2Z'
      />
    </svg>
  )
}
