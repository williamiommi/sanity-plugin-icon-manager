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
      type: 'iconPicker',
      name: 'iconPicker',
    }),
    defineField({
      type: 'array',
      name: 'iconPickerFieldArray',
      of: [{type: 'iconPicker'}],
    }),
    defineField({
      type: 'array',
      name: 'testArray',
      of: [
        {
          type: 'object',
          name: 'testTest',
          fields: [
            defineField({
              type: 'string',
              name: 'test',
              title: 'Test',
            }),
            defineField({
              type: 'string',
              name: 'test2',
              title: 'Test2',
            }),
          ],
        },
      ],
    }),
  ],
})

export default IconifyDocument
