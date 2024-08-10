import {SVGProps} from 'react'

interface Props extends SVGProps<SVGSVGElement> {}

export default function TrashIcon(props: Props) {
  return (
    <svg viewBox='0 0 48 48' height='48' width='48' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M24 21.3L12.7 10L26 1.7L38.3 10z' fill='#FF8A65' />
      <path d='M24 21.3L12.7 10L17 4.7L38.3 10z' fill='#FFAB91' />
      <path
        fill='#9badac'
        d='M30.6 44H17.4c-2 0-3.7-1.4-4-3.4L9 11h30l-4.5 29.6c-.3 2-2 3.4-3.9 3.4'
      />
      <path fill='#47474f' d='M38 13H10c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2' />
    </svg>
  )
}
