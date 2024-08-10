/* eslint-disable react/jsx-no-bind */
import {memo, useMemo} from 'react'

import {filterIcons} from '../../lib/collections-utils'
import {useAppStoreContext} from '../../store/context'
import ResultsGrid from '../ResultsGrid'

interface IconsGridProps {
  searchTerm?: string
}

const IconsGrid = ({searchTerm}: IconsGridProps) => {
  const selectedCollection = useAppStoreContext((s) => s.selectedCollection)
  const filteredIcons = useMemo(() => {
    return filterIcons(searchTerm, selectedCollection?.icons)
  }, [searchTerm, selectedCollection])

  if (!filteredIcons) return null

  return <ResultsGrid items={filteredIcons} collection={selectedCollection?.collection} />
}

export default memo(IconsGrid)
