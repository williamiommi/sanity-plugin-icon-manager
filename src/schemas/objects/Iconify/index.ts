import {defineField, defineType} from 'sanity'
import IconifyField from '../../../components/IconifyField'
import IconifyFieldDiff from '../../../components/IconifyFieldDiff'
import extraFields from './extra.fields'
import IconifyMetadata from './metadata'

const Iconify = defineType({
  type: 'object',
  name: IconifyMetadata.name,
  title: IconifyMetadata.title,
  fields: [
    defineField({
      type: 'string',
      name: 'icon',
      title: 'Icon',
    }),
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
      type: 'object',
      name: 'metadata',
      title: 'Metadata',
      fields: extraFields,
    }),
  ],
  components: {
    field: IconifyField,
    diff: IconifyFieldDiff,
  },
})

export default Iconify
