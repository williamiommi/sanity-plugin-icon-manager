import {defineField, defineType} from 'sanity'
import IconifyMetadata from '../objects/Iconify/metadata'

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
      type: IconifyMetadata.name,
      name: 'icon',
      title: 'Icon',
      description: 'This is a description',
    }),
  ],
})

export default IconifyDocument
