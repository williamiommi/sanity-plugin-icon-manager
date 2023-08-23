import {Icon} from '@iconify-icon/react'
import {WarningOutlineIcon} from '@sanity/icons'
import {Badge, Button, Card, Flex, Grid, Text} from '@sanity/ui'
import {useAppStore} from '../store'
import SearchPagination from './SearchPagination'

interface SearchResultsProps {}

const SearchResults = (props: SearchResultsProps) => {
  const queryResults = useAppStore((s) => s.queryResults)
  const currentPage = useAppStore((s) => s.currentPage)

  if (!queryResults) return null

  if (queryResults.total === 0)
    return (
      <Badge
        mode='outline'
        tone='critical'
        margin={4}
        style={{fontWeight: 'bold', fontSize: '20px', boxShadow: 'none'}}
      >
        <WarningOutlineIcon />
        &nbsp;&nbsp;No icons found!
      </Badge>
    )

  return (
    <>
      <Flex
        justify='space-between'
        marginX={4}
        marginY={1}
        gap={2}
        align='center'
        style={{minHeight: '22px'}}
      >
        <Text size={1} style={{fontStyle: 'italic'}}>
          {queryResults.total} icons found
        </Text>
        <SearchPagination />
      </Flex>
      <Card
        border
        radius={2}
        marginX={4}
        padding={4}
        style={{marginBottom: '20px', minHeight: '230px'}}
      >
        <Grid columns={[3, 5, 5, 7, 10]} gap={3} autoCols='fr'>
          {queryResults?.chunks[currentPage].map((icon) => (
            <Button
              key={icon}
              mode='bleed'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              title={icon}
              icon={<Icon icon={icon} width='30' />}
            />
          ))}
        </Grid>
      </Card>
    </>
  )
}

export default SearchResults
