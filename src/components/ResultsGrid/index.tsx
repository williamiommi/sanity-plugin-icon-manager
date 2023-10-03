/* eslint-disable react/jsx-no-bind */
import {Card, Grid} from '@sanity/ui'
import usePagination from '../../hooks/usePagination'
import {useAppStoreContext} from '../../store/context'
import {IconifyInfoEnhanced} from '../../types/IconifyInfoEnhanced'
import Pagination from '../Pagination'
import SearchResultsIcon from '../Search/SearchResults.Icon'

type ResultGridItem = {
  icon: string
  iconName: string
  collection: IconifyInfoEnhanced
}

interface ResultsGridProps {
  items: ResultGridItem[]
}

const ResultsGrid = ({items}: ResultsGridProps) => {
  const {currentItems, ...paginationBag} = usePagination<ResultGridItem>(items)
  const saveIcon = useAppStoreContext((s) => s.saveIcon)
  return (
    <>
      <Pagination {...paginationBag} />
      <Card border radius={2} marginX={4} marginBottom={5} padding={4}>
        <Grid as='ul' columns={[3, 5, 5, 7, 10]} gap={3}>
          {currentItems.map((item) => (
            <SearchResultsIcon
              key={item.icon}
              icon={item.icon}
              iconName={item.iconName}
              collectionName={item.collection.name}
              onClick={() => saveIcon(item.icon, item.iconName, item.collection)}
            />
          ))}
        </Grid>
      </Card>
    </>
  )
}

export default ResultsGrid
