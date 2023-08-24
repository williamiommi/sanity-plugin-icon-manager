import {WarningOutlineIcon} from '@sanity/icons'
import {Badge, Card, Flex, Grid, Text} from '@sanity/ui'
import {useAppStore} from '../store'
import SearchPagination from './SearchPagination'
import SearchResultsIcon from './SearchResults.Icon'

interface SearchResultsProps {}

const SearchResults = (props: SearchResultsProps) => {
  const queryResults = useAppStore((s) => s.queryResults)
  const iconsPerPage = useAppStore((s) => s.iconsPerPage)
  const currentPage = useAppStore((s) => s.currentPage)
  const selectIcon = useAppStore((s) => s.selectIcon)

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
          {queryResults.total} {queryResults.total === 1 ? 'icon' : 'icons'} found
        </Text>
        <SearchPagination />
      </Flex>
      <Card border radius={2} marginX={4} padding={4} style={{marginBottom: '20px'}}>
        <Grid as='ul' columns={[3, 5, 5, 7, 10]} gap={3} autoCols='fr'>
          {queryResults?.icons
            .slice(currentPage * iconsPerPage, (currentPage + 1) * iconsPerPage)
            .map((icon) => <SearchResultsIcon key={icon} icon={icon} onClick={selectIcon} />)}
        </Grid>
      </Card>
    </>
  )
}

export default SearchResults
