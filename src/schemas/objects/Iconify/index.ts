import {defineField, defineType} from 'sanity'
import IconifyField from '../../../components/IconifyField'
import IconifyCollectionMetadata from '../IconifyCollection/metadata'
import IconifyMetadata from './metadata'

const Iconify = defineType({
  type: IconifyMetadata.type,
  name: IconifyMetadata.name,
  title: IconifyMetadata.title,
  fields: [
    defineField({
      type: 'string',
      name: 'collection',
      title: 'Collection',
    }),
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
    }),
    defineField({
      type: 'string',
      name: 'color',
      title: 'Color',
    }),
    defineField({
      type: 'string',
      name: 'svg',
      title: 'Svg',
    }),
    defineField({
      type: IconifyCollectionMetadata.name,
      name: 'metadata',
      title: 'Collection Metadata',
    }),
  ],
  components: {
    field: IconifyField,
  },
})

export default Iconify
