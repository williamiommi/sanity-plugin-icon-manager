import IconManagerCollectionResponse from '../types/IconManagerCollectionResponse'
import {IconManagerIconInfo} from '../types/IconManagerQueryResponse'
import {IconifyInfoEnhanced} from '../types/IconifyInfoEnhanced'

const sort = (arr: any[], comparator: string) => {
  return arr.sort((a, b) => {
    const nameA = a[comparator].toLowerCase()
    const nameB = b[comparator].toLowerCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
}

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
  Object.values(collections).forEach((value) => sort(value, 'name'))
  return collections
}

export const groupAndSortCollections = (
  collections: Record<string, IconifyInfoEnhanced>,
): Record<string, IconifyInfoEnhanced[]> => {
  return sortCollections(groupByCategory(filterVisibleCollections(collections)))
}

export const filterCollections = (
  searchTerm?: string,
  groupedCollections?: Record<string, IconifyInfoEnhanced[]>,
): Record<string, IconifyInfoEnhanced[]> | undefined => {
  if (!searchTerm || !groupedCollections) return groupedCollections

  const clonedItems = {...groupedCollections}

  const lowerCaseSearchTerm = searchTerm.toLowerCase()
  Object.keys(clonedItems).forEach((group) => {
    clonedItems[group] = clonedItems[group].filter((collection) => {
      return (
        group.toLowerCase().includes(lowerCaseSearchTerm) ||
        collection.author.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        collection.name.toLowerCase().includes(lowerCaseSearchTerm)
      )
    })
  })

  return clonedItems
}

export const getIconsFromCollection = (
  collection: IconManagerCollectionResponse,
): IconManagerIconInfo[] => {
  const output: IconManagerIconInfo[] = []

  // loop trough uncategorized
  if (collection.uncategorized)
    collection.uncategorized?.forEach((icon) => {
      output.push({icon: `${collection.prefix}:${icon}`, iconName: icon})
    })
  if (collection.categories) {
    Object.keys(collection.categories).forEach((category) => {
      if (collection.categories) {
        collection.categories[category].forEach((icon) => {
          output.push({icon: `${collection.prefix}:${icon}`, iconName: icon})
        })
      }
    })
  }

  return sort(output, 'iconName')
}

export const filterIcons = (
  searchTerm?: string,
  icons?: IconManagerIconInfo[],
): IconManagerIconInfo[] | undefined => {
  if (!searchTerm || !icons) return icons

  const lowerCaseSearchTerm = searchTerm.toLowerCase()
  return icons.filter(
    ({icon, iconName}) =>
      icon.toLowerCase().includes(lowerCaseSearchTerm) ||
      iconName.toLowerCase().includes(lowerCaseSearchTerm),
  )
}
