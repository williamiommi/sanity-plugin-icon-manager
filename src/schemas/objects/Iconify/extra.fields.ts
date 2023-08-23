import {defineField} from 'sanity'

const metadataFields = [
  defineField({
    type: 'string',
    name: 'color',
    title: 'Color',
  }),
  defineField({
    type: 'object',
    name: 'license',
    title: 'License Info',
    fields: [
      defineField({
        type: 'string',
        name: 'name',
        title: 'License Name',
      }),
      defineField({
        type: 'string',
        name: 'url',
        title: 'License Url',
      }),
    ],
  }),
  defineField({
    type: 'object',
    name: 'author',
    title: 'Author Info',
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
  }),
]

export default metadataFields
