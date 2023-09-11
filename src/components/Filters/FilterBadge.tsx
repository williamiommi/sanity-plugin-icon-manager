import {StyledFilterBadge} from '../../style'

interface FilterBadgeProps {
  count: number
}

const FilterBadge = ({count}: FilterBadgeProps) => {
  if (count === 0) return null
  return <StyledFilterBadge tone='positive'>{count}</StyledFilterBadge>
}

export default FilterBadge
