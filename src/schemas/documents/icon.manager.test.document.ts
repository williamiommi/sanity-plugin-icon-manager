import {defineField, defineType} from 'sanity'
import IconManagerMetadata from '../objects/IconManager/metadata'

const IconManagerTestDocument = defineType({
  type: 'document',
  name: 'icon.manager.test',
  title: 'Icon Manager Test',
  fields: [
    defineField({
      type: 'string',
      name: 'test',
      title: 'Test',
    }),
    defineField({
      type: IconManagerMetadata.name,
      name: 'icon',
      title: 'Icon',
      description: 'This is a description',
    }),
    defineField({
      type: 'array',
      name: 'iconManagerFieldArray',
      of: [{type: IconManagerMetadata.name}],
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          of: [{type: IconManagerMetadata.name, title: 'Inline Icon'}],
        },
        {
          type: IconManagerMetadata.name,
          title: 'Block Icon',
        },
      ],
    }),
  ],
})

export default IconManagerTestDocument
