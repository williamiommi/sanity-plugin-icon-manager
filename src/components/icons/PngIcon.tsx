import {ReactNode, SVGProps} from 'react'

interface Props extends SVGProps<SVGSVGElement> {}

export default function PngIcon(props: Props): ReactNode {
  return (
    <svg viewBox='0 0 48 48' width='48' height='48' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4'
        fill='#8CBCD6'
      />
      <circle fill='#B3DDF5' r='3' cy='16' cx='35' />
      <path d='M20 16L9 32h22z' fill='#9AC9E3' />
      <path d='m31 22l-8 10h16z' fill='#B3DDF5' />
    </svg>
  )
}
