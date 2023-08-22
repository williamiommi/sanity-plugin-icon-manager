import {Badge} from '@sanity/ui'

interface FilterBadgeProps {
  count: number
}

const FilterBadge = ({count}: FilterBadgeProps) => {
  if (count === 0) return null
  return (
    <Badge
      tone='positive'
      style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: -5,
        right: -5,
        zIndex: 1,
        borderRadius: '50%',
        width: 20,
        height: 20,
        padding: 0,
      }}
    >
      {count}
    </Badge>
  )
}

export default FilterBadge
