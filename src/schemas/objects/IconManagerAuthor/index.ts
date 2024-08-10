import {defineField, defineType, SchemaTypeDefinition} from 'sanity'

import IconManagerAuthorInfo from './info'

const IconManagerAuthorObject = (): SchemaTypeDefinition =>
  defineType({
    type: 'object',
    name: IconManagerAuthorInfo.name,
    title: IconManagerAuthorInfo.title,
    fields: [
      defineField({
        type: 'string',
        name: 'name',
        title: 'Author Name',
      }),
      defineField({
        type: 'string',
        name: 'url',
        title: 'Author Url',
      }),
    ],
  })

export default IconManagerAuthorObject
