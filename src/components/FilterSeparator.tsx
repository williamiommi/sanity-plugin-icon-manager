import {Card} from '@sanity/ui'

interface FilterSeparatorProps {}

const FilterSeparator = (props: FilterSeparatorProps) => {
  return (
    <Card style={{height: 2}} tone='primary'>
      &nbsp;
    </Card>
  )
}

export default FilterSeparator
