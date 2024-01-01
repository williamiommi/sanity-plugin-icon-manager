import {defineField, defineType} from 'sanity'
import IconManagerRGBAInfo from './info'

const IconManagerRGBAObject = (): any =>
  defineType({
    type: 'object',
    name: IconManagerRGBAInfo.name,
    title: IconManagerRGBAInfo.title,
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
  })

export default IconManagerRGBAObject
