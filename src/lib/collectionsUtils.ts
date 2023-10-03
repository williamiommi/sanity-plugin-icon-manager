import {IconifyInfoEnhanced} from '../types/IconifyInfoEnhanced'

const filterVisibleCollections = (collections: Record<string, IconifyInfoEnhanced>) => {
  return Object.keys(collections)
    .map((collectionCode) => ({
      ...collections[collectionCode],
      code: collectionCode,
    }))
    .filter((collection) => !collection.hidden)
}

const groupByCategory = (
  collections: IconifyInfoEnhanced[],
): Record<string, IconifyInfoEnhanced[]> => {
  return collections.reduce(
    (acc, curr) => {
      const currentCategory = curr.category || '???'
      if (acc[currentCategory]) acc[currentCategory] = [...acc[currentCategory], curr]
      else acc[currentCategory] = [curr]
      return acc
    },
    {} as Record<string, IconifyInfoEnhanced[]>,
  )
}

const sortCollections = (collections: Record<string, IconifyInfoEnhanced[]>) => {
  Object.values(collections).forEach((value) =>
    value.sort((a, b) => {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    }),
  )
  return collections
}

export const groupAndSortCollections = (
  collections: Record<string, IconifyInfoEnhanced>,
): Record<string, IconifyInfoEnhanced[]> => {
  return sortCollections(groupByCategory(filterVisibleCollections(collections)))
}

export const filterCollections = (
  searchTerm: string,
  groupedCollections?: Record<string, IconifyInfoEnhanced[]>,
): Record<string, IconifyInfoEnhanced[]> | undefined => {
  if (!searchTerm || !groupedCollections) return groupedCollections

  const clonedItems = {...groupedCollections}

  const lowerCaseSearchTerm = searchTerm.toLowerCase()
  Object.keys(clonedItems).forEach((group) => {
    clonedItems[group] = clonedItems[group].filter((collection) => {
      return (
        collection.author.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        collection.name.toLowerCase().includes(lowerCaseSearchTerm)
      )
    })
  })

  return clonedItems
}
