import {defineField, defineType} from 'sanity'
import IconifyField from '../../../components/IconifyField'
import IconifyFieldDiff from '../../../components/IconifyFieldDiff'
import IconifyPluginOptions from '../../../types/IconifyPluginOptions'
import extraFields from './extra.fields'
import IconifyMetadata from './metadata'

const Iconify = (pluginOptions: IconifyPluginOptions): any =>
  defineType({
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
        type: 'object',
        name: 'metadata',
        title: 'Metadata',
        fields: extraFields,
      }),
    ],
    components: {
      field: (props) => IconifyField(props, pluginOptions),
      diff: IconifyFieldDiff,
    },
  })

export default Iconify
