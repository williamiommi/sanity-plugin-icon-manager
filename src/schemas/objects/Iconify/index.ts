import {ObjectInputProps, defineField, defineType} from 'sanity'
import IconifyDiffComponent from '../../../components/IconifyDiffComponent'
import IconifyInputComponent from '../../../components/IconifyInputComponent'
import IconifyPreviewComponent, {
  IconifyPreviewComponentProps,
} from '../../../components/IconifyPreviewComponent'
import IconifyPluginOptions from '../../../types/IconifyPluginOptions'
import {IconifyType} from '../../../types/IconifyType'
import extraFields from './extra.fields'
import IconifyMetadata from './metadata'

const Iconify = (pluginOptions: void | IconifyPluginOptions): any =>
  defineType({
    type: 'object',
    name: IconifyMetadata.name,
    title: IconifyMetadata.title,
    preview: {
      select: {
        icon: 'icon',
        metadata: 'metadata',
      },
    },
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
      preview: (props) => IconifyPreviewComponent(props as IconifyPreviewComponentProps),
      diff: IconifyDiffComponent,
    },
  })

export default Iconify
