import {defineField, defineType} from 'sanity'
import IconifyCollectionMetadata from './metadata'

const IconifyCollection = defineType({
  type: IconifyCollectionMetadata.type,
  name: IconifyCollectionMetadata.name,
  title: IconifyCollectionMetadata.title,
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Collection Name',
    }),
    defineField({
      type: 'string',
      name: 'authorName',
      title: 'Author Name',
    }),
    defineField({
      type: 'string',
      name: 'authorUrl',
      title: 'Author Url',
    }),
    defineField({
      type: 'string',
      name: 'licenseName',
      title: 'License Name',
    }),
    defineField({
      type: 'string',
      name: 'licenseUrl',
      title: 'License Url',
    }),
  ],
})

export default IconifyCollection
