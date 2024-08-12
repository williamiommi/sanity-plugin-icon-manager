import {ReactNode} from 'react'

import {StyledFilterBadge} from '../../style'

interface FilterBadgeProps {
  count: number
}

export default function FilterBadge({count}: FilterBadgeProps): ReactNode {
  if (count === 0) return null
  return <StyledFilterBadge tone='positive'>{count}</StyledFilterBadge>
}
