import {defineField, defineType} from 'sanity'
import IconManagerSizeInfo from './info'

const IconManagerSizeObject = (): any =>
  defineType({
    type: 'object',
    name: IconManagerSizeInfo.name,
    title: IconManagerSizeInfo.title,
    fields: [
      defineField({
        type: 'number',
        name: 'width',
        title: 'Width',
        validation: (Rule) => Rule.min(0),
      }),
      defineField({
        type: 'number',
        name: 'height',
        title: 'Height',
        validation: (Rule) => Rule.min(0),
      }),
    ],
  })

export default IconManagerSizeObject
