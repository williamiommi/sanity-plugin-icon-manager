import {ObjectInputProps, defineField, defineType} from 'sanity'
import IconifyDiffComponent from '../../../components/IconifyDiffComponent'
import IconifyInputComponent from '../../../components/IconifyInputComponent'
import IconifyPluginOptions from '../../../types/IconifyPluginOptions'
import {IconifyType} from '../../../types/IconifyType'
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
      input: (props) =>
        IconifyInputComponent(props as ObjectInputProps<IconifyType>, pluginOptions),
      diff: IconifyDiffComponent,
    },
  })

export default Iconify
