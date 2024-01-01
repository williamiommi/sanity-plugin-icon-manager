import {defineField, defineType} from 'sanity'
import IconManagerRGBAInfo from '../IconManagerRgba/info'
import IconManagerColorInfo from './info'

const IconManagerColorObject = (): any =>
  defineType({
    type: 'object',
    name: IconManagerColorInfo.name,
    title: IconManagerColorInfo.title,
    fields: [
      defineField({
        type: 'string',
        name: 'hex',
        title: 'Hex Color',
      }),
      defineField({
        type: IconManagerRGBAInfo.name,
        name: 'rgba',
        title: 'RGBA Color',
      }),
    ],
  })

export default IconManagerColorObject
