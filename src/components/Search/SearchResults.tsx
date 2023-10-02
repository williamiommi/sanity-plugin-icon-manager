import {WarningOutlineIcon} from '@sanity/icons'
import {Badge, Card, Grid} from '@sanity/ui'
import usePagination from '../../hooks/usePagination'
import {useAppStoreContext} from '../../store/context'
import Pagination from '../Pagination'
import SearchResultsIcon from './SearchResults.Icon'

interface SearchResultsProps {}

const SearchResults = (props: SearchResultsProps) => {
  const queryResults = useAppStoreContext((s) => s.queryResults)
  const {currentItems, ...paginationBag} = usePagination<string>(queryResults?.icons)
  const selectIcon = useAppStoreContext((s) => s.selectIcon)

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
      <Pagination {...paginationBag} />
      <Card border radius={2} marginX={4} marginBottom={5} padding={4}>
        <Grid as='ul' columns={[3, 5, 5, 7, 10]} gap={3}>
          {currentItems.map((icon) => {
            const iconInfo = icon?.split(':')
            let iconName
            let collectionName
            try {
              iconName = iconInfo[1]
              collectionName =
                (iconInfo[0] && queryResults?.collections[iconInfo[0]].name) || undefined
            } catch (e) {
              console.error(e)
            }
            return (
              <SearchResultsIcon
                key={icon}
                icon={icon}
                iconName={iconName}
                collectionName={collectionName}
                onClick={selectIcon}
              />
            )
          })}
        </Grid>
      </Card>
    </>
  )
}

export default SearchResults
