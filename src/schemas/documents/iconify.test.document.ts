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
    defineField({
      type: 'array',
      name: 'iconifyFieldArray',
      of: [{type: IconifyMetadata.name}],
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          of: [{type: IconifyMetadata.name, title: 'Iconify Inline'}],
        },
        {
          type: IconifyMetadata.name,
          title: 'Iconify Block',
        },
      ],
    }),
  ],
})

export default IconifyDocument
