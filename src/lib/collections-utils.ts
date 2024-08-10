import {IconifyInfoEnhanced} from '../types/IconifyInfoEnhanced'
import IconManagerCollectionResponse from '../types/IconManagerCollectionResponse'
import {IconManagerIconInfo} from '../types/IconManagerQueryResponse'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  const lowerCaseSearchTerm = searchTerm.toLowerCase()

  return Object.keys(groupedCollections).reduce(
    (acc, group) => {
      const filtered = groupedCollections[group].filter(
        (collection) =>
          group.toLowerCase().includes(lowerCaseSearchTerm) ||
          collection.author.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          collection.name.toLowerCase().includes(lowerCaseSearchTerm),
      )
      if (filtered.length > 0) {
        if (!acc) acc = {}
        acc[group] = filtered
      }
      return acc
    },
    undefined as Record<string, IconifyInfoEnhanced[]> | undefined,
  )
}

export const filterCollectionsFromList = (
  collections?: string[],
  groupedCollections?: Record<string, IconifyInfoEnhanced[]>,
): Record<string, IconifyInfoEnhanced[]> | undefined => {
  if (!collections || collections.length === 0 || !groupedCollections) return groupedCollections

  return Object.keys(groupedCollections).reduce(
    (acc, group) => {
      const filtered = groupedCollections[group].filter((collection) =>
        collections.includes(collection.code),
      )
      if (filtered.length > 0) acc[group] = filtered
      return acc
    },
    {} as Record<string, IconifyInfoEnhanced[]>,
  )
}

export const getAllCollectionsCode = (
  groupedCollections: Record<string, IconifyInfoEnhanced[]>,
): string[] =>
  Object.values(groupedCollections)
    .flat()
    .map((collection) => collection.code)

export const filterMissingCollectionsFromList = (
  collections?: string[],
  groupedCollections?: Record<string, IconifyInfoEnhanced[]>,
): string[] | undefined => {
  if (!collections || collections.length === 0 || !groupedCollections) return undefined

  const allCollectionCodes = getAllCollectionsCode(groupedCollections)

  const missingCollections = collections.filter(
    (collection) => !allCollectionCodes.includes(collection),
  )

  return missingCollections.length > 0 ? missingCollections : undefined
}

export const getIconsFromCollection = (
  collection: IconManagerCollectionResponse,
): IconManagerIconInfo[] => {
  const output: IconManagerIconInfo[] = []
  const icons = new Set()

  const addIcon = (icon: string) => {
    if (!icons.has(icon)) {
      icons.add(icon)
      output.push({icon: `${collection.prefix}:${icon}`, iconName: icon})
    }
  }

  // loop trough uncategorized
  if (collection.uncategorized) collection.uncategorized?.forEach(addIcon)
  if (collection.categories) {
    Object.keys(collection.categories).forEach((category) => {
      if (collection.categories) {
        collection.categories[category].forEach(addIcon)
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
