/* eslint-disable react/jsx-no-bind */
import {Badge, Card, Grid, Label, ResponsiveMarginProps} from '@sanity/ui'
import {ReactNode} from 'react'

import usePagination from '../../hooks/usePagination'
import usePluginTranslation from '../../hooks/usePluginTranslation'
import {useAppStoreContext} from '../../store/context'
import {IconifyInfoEnhanced} from '../../types/IconifyInfoEnhanced'
import {IconManagerIconInfo} from '../../types/IconManagerQueryResponse'
import Pagination from '../Pagination'
import ResultsGridItem from './ResultsGridItem'

interface ResultsGridProps extends ResponsiveMarginProps {
  items?: IconManagerIconInfo[]
  collection?: IconifyInfoEnhanced
  border?: boolean
}

export default function ResultsGrid({
  items,
  collection,
  border,
  ...responsiveMargin
}: ResultsGridProps): ReactNode {
  const {t} = usePluginTranslation()
  const {currentItems, ...paginationBag} = usePagination<IconManagerIconInfo>(items)
  const saveIcon = useAppStoreContext((s) => s.saveIcon)

  if (!items) return null

  if (items.length === 0)
    return (
      <Badge
        tone='critical'
        radius={0}
        marginX={4}
        marginBottom={4}
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
      <Card border={border} radius={3} padding={4} {...responsiveMargin}>
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
