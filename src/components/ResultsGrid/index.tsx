/* eslint-disable react/jsx-no-bind */
import {Badge, Card, Grid, Label} from '@sanity/ui'
import {useTranslation} from 'sanity'
import usePagination from '../../hooks/usePagination'
import {I18N_NAMESPACE} from '../../lib/constants'
import {useAppStoreContext} from '../../store/context'
import {IconManagerIconInfo} from '../../types/IconManagerQueryResponse'
import {IconifyInfoEnhanced} from '../../types/IconifyInfoEnhanced'
import Pagination from '../Pagination'
import ResultsGridItem from './ResultsGridItem'

interface ResultsGridProps {
  items?: IconManagerIconInfo[]
  collection?: IconifyInfoEnhanced
}

const ResultsGrid = ({items, collection}: ResultsGridProps) => {
  const {t} = useTranslation(I18N_NAMESPACE)
  const {currentItems, ...paginationBag} = usePagination<IconManagerIconInfo>(items)
  const saveIcon = useAppStoreContext((s) => s.saveIcon)

  if (!items) return null

  if (items.length === 0)
    return (
      <Badge
        mode='outline'
        tone='critical'
        margin={4}
        marginTop={0}
        radius={0}
        style={{
          display: 'block',
          fontWeight: 'bold',
          fontSize: '20px',
          boxShadow: 'none',
          textAlign: 'center',
        }}
      >
        <Label style={{padding: '10px'}}>{t('error.no.icons.found')}</Label>
      </Badge>
    )

  return (
    <>
      <Pagination {...paginationBag} />
      <Card border radius={2} marginX={4} marginBottom={5} padding={4}>
        <Grid as='ul' columns={[3, 5, 5, 7, 10]} gap={3}>
          {currentItems.map((item) => (
            <ResultsGridItem
              key={item.icon}
              icon={item.icon}
              iconName={item.iconName}
              collectionName={collection?.name || item.collection?.name || ''}
              onClick={() => saveIcon({...item, collection: collection || item.collection})}
            />
          ))}
        </Grid>
      </Card>
    </>
  )
}

export default ResultsGrid
