export type Flip = 'horizontal' | 'vertical' | 'horizontal,vertical' | undefined

export const getFlipValue = (flipH?: boolean, flipV?: boolean): Flip => {
  let output: Flip
  if (flipH) output = 'horizontal'
  if (flipV) output = 'vertical'
  if (flipH && flipV) output = 'horizontal,vertical'
  return output
}
