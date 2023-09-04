export type Flip = 'horizontal' | 'vertical' | 'horizontal,vertical' | undefined

export const getFlipValue = (hFlip?: boolean, vFlip?: boolean): Flip => {
  let output: Flip
  if (hFlip) output = 'horizontal'
  if (vFlip) output = 'vertical'
  if (hFlip && vFlip) output = 'horizontal,vertical'
  return output
}
