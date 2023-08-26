import {defineField} from 'sanity'

const metadataFields = [
  defineField({
    type: 'string',
    name: 'collectionId',
    title: 'Collection Id',
  }),
  defineField({
    type: 'string',
    name: 'collectionName',
    title: 'Collection Name',
  }),
  defineField({
    type: 'string',
    name: 'iconName',
    title: 'Icon Name',
  }),
  defineField({
    type: 'boolean',
    name: 'palette',
    title: 'Palette',
  }),
  defineField({
    type: 'number',
    name: 'viewbox',
    title: 'Viewbox',
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
  defineField({
    type: 'number',
    name: 'customSize',
    title: 'Custom Size',
  }),
  defineField({
    type: 'boolean',
    name: 'flipH',
    title: 'Flip H',
  }),
  defineField({
    type: 'boolean',
    name: 'flipV',
    title: 'Flip V',
  }),
  defineField({
    type: 'number',
    name: 'rotate',
    title: 'Rotate',
  }),
  defineField({
    type: 'object',
    name: 'color',
    title: 'Color',
    fields: [
      defineField({
        type: 'string',
        name: 'hex',
        title: 'Hex Color',
      }),
      defineField({
        type: 'object',
        name: 'rgba',
        title: 'RGBA Color',
        fields: [
          defineField({
            type: 'number',
            name: 'r',
            title: 'Red',
            validation: (Rule) => Rule.min(0).max(255),
          }),
          defineField({
            type: 'number',
            name: 'g',
            title: 'Green',
            validation: (Rule) => Rule.min(0).max(255),
          }),
          defineField({
            type: 'number',
            name: 'b',
            title: 'Blue',
            validation: (Rule) => Rule.min(0).max(255),
          }),
          defineField({
            type: 'number',
            name: 'a',
            title: 'Alpha',
            validation: (Rule) => Rule.min(0).max(1),
          }),
        ],
      }),
    ],
  }),
]

export default metadataFields
