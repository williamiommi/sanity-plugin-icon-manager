import {defineField, defineType} from 'sanity'
import IconifyObjectMetadata from '../objects/iconify.object.metadata'

const IconifyDocument = defineType({
  type: 'document',
  name: 'iconify.test',
  title: 'Iconify Test',
  fields: [
    defineField({
      type: 'string',
      name: 'test',
      title: 'Test',
    }),
    defineField({
      type: IconifyObjectMetadata.name,
      name: 'icon',
      title: 'Icon',
      description: 'This is a description',
    }),
  ],
})

export default IconifyDocument
