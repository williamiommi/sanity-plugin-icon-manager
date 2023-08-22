import {Icon} from '@iconify-icon/react'
import {Button, Card, Grid} from '@sanity/ui'
import {useAppStore} from '../store'

interface SearchResultsProps {}

const SearchResults = (props: SearchResultsProps) => {
  const queryResults = useAppStore((s) => s.queryResults)

  if (!queryResults) return null

  return (
    <Card border radius={2} margin={4} padding={4}>
      <Grid columns={[3, 5, 7, 10]} gap={5}>
        {queryResults?.icons.map((icon) => (
          <Button key={icon} mode='bleed'>
            <Icon icon={icon} width={30} />
          </Button>
        ))}
      </Grid>
    </Card>
  )
}

export default SearchResults
