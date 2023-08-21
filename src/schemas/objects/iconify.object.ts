import {defineField, defineType} from 'sanity'
import IconifyField from '../../components/IconifyField'
import IconifyObjectMetadata from './iconify.object.metadata'

const IconifyObject = defineType({
  type: IconifyObjectMetadata.type,
  name: IconifyObjectMetadata.name,
  title: IconifyObjectMetadata.title,
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
  ],
  components: {
    field: IconifyField,
  },
})

export default IconifyObject
