import {defineField, defineType} from 'sanity'
import IconifyField from '../../../components/IconifyField'
import extraFields from './extra.fields'
import IconifyMetadata from './metadata'

const Iconify = defineType({
  type: 'object',
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
      name: 'inlineSvg',
      title: 'Inline Svg',
    }),
    defineField({
      type: 'object',
      name: 'metadata',
      title: 'Metadata',
      fields: extraFields,
    }),
  ],
  components: {
    field: IconifyField,
  },
})

export default Iconify
