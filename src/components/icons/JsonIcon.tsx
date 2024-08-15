import {ReactNode, SVGProps} from 'react'

interface Props extends SVGProps<SVGSVGElement> {}

export default function JsonIcon(props: Props): ReactNode {
  return (
    <svg viewBox='0 0 16 16' width='16' height='16' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        clipRule='evenodd'
        d='M6 2.984V2h-.09q-.47 0-.909.185a2.3 2.3 0 0 0-.775.53a2.2 2.2 0 0 0-.493.753v.001a3.5 3.5 0 0 0-.198.83v.002a6 6 0 0 0-.024.863q.018.435.018.869q0 .304-.117.572v.001a1.5 1.5 0 0 1-.765.787a1.4 1.4 0 0 1-.558.115H2v.984h.09q.292 0 .556.121l.001.001q.267.117.455.318l.002.002q.196.195.307.465l.001.002q.117.27.117.566q0 .435-.018.869q-.018.443.024.87v.001q.05.425.197.824v.001q.16.41.494.753q.335.345.775.53t.91.185H6v-.984h-.09q-.3 0-.563-.115a1.6 1.6 0 0 1-.457-.32a1.7 1.7 0 0 1-.309-.467q-.11-.27-.11-.573q0-.343.011-.672q.012-.342 0-.665a5 5 0 0 0-.055-.64a2.7 2.7 0 0 0-.168-.609A2.3 2.3 0 0 0 3.522 8a2.3 2.3 0 0 0 .738-.955q.12-.288.168-.602q.05-.315.055-.64q.012-.33 0-.666t-.012-.678a1.47 1.47 0 0 1 .877-1.354a1.3 1.3 0 0 1 .563-.121zm4 10.032V14h.09q.47 0 .909-.185t.775-.53t.493-.753v-.001q.15-.4.198-.83v-.002q.042-.42.024-.863q-.018-.435-.018-.869q0-.304.117-.572v-.001a1.5 1.5 0 0 1 .765-.787a1.4 1.4 0 0 1 .558-.115H14v-.984h-.09q-.293 0-.557-.121l-.001-.001a1.4 1.4 0 0 1-.455-.318l-.002-.002a1.4 1.4 0 0 1-.307-.465v-.002a1.4 1.4 0 0 1-.118-.566q0-.435.018-.869a6 6 0 0 0-.024-.87v-.001a3.5 3.5 0 0 0-.197-.824v-.001a2.2 2.2 0 0 0-.494-.753a2.3 2.3 0 0 0-.775-.53a2.3 2.3 0 0 0-.91-.185H10v.984h.09q.3 0 .562.115q.26.123.457.32q.19.201.309.467q.11.27.11.573q0 .342-.011.672q-.012.342 0 .665q.006.333.055.64q.05.32.168.609a2.3 2.3 0 0 0 .738.955a2.3 2.3 0 0 0-.738.955a2.7 2.7 0 0 0-.168.602q-.05.315-.055.64a9 9 0 0 0 0 .666q.012.336.012.678a1.47 1.47 0 0 1-.877 1.354a1.3 1.3 0 0 1-.563.121z'
        fillRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
