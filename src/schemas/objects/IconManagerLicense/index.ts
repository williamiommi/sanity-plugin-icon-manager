import {defineField, defineType} from 'sanity'
import IconManagerLicenseInfo from './info'

const IconManagerLicenseObject = (): any =>
  defineType({
    type: 'object',
    name: IconManagerLicenseInfo.name,
    title: IconManagerLicenseInfo.title,
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
  })

export default IconManagerLicenseObject
