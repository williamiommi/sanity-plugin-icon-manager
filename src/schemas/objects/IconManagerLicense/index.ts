import {defineField, defineType, SchemaTypeDefinition} from 'sanity'

import IconManagerLicenseInfo from './info'

const IconManagerLicenseObject = (): SchemaTypeDefinition =>
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
