import {defineField, defineType} from 'sanity'
import IconManagerAuthorInfo from '../IconManagerAuthor/info'
import IconManagerColorInfo from '../IconManagerColor/info'
import IconManagerLicenseInfo from '../IconManagerLicense/info'
import IconManagerSizeInfo from '../IconManagerSize/info'
import IconManagerMetadataInfo from './info'

const IconManagerMetadataObject = (): any =>
  defineType({
    type: 'object',
    name: IconManagerMetadataInfo.name,
    title: IconManagerMetadataInfo.title,
    fields: [
      defineField({
        type: 'string',
        name: 'downloadUrl',
        title: 'Download Url',
      }),
      defineField({
        type: 'string',
        name: 'url',
        title: 'Url',
      }),
      defineField({
        type: 'string',
        name: 'inlineSvg',
        title: 'Inline Svg',
      }),
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
        type: IconManagerLicenseInfo.name,
        name: 'license',
        title: 'License Info',
      }),
      defineField({
        type: IconManagerAuthorInfo.name,
        name: 'author',
        title: 'Author Info',
      }),
      defineField({
        type: IconManagerSizeInfo.name,
        name: 'size',
        title: 'Custom Size',
      }),
      defineField({
        type: 'boolean',
        name: 'hFlip',
        title: 'H Flip',
      }),
      defineField({
        type: 'boolean',
        name: 'vFlip',
        title: 'V Flip',
      }),
      defineField({
        type: 'number',
        name: 'rotate',
        title: 'Rotate',
      }),
      defineField({
        type: IconManagerColorInfo.name,
        name: 'color',
        title: 'Color',
      }),
    ],
  })

export default IconManagerMetadataObject
