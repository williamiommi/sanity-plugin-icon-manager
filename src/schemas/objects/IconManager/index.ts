import {ObjectInputProps, defineField, defineType} from 'sanity'
import IconManagerDiffComponent from '../../../components/IconManagerDiffComponent'
import IconManagerInlineBlockComponent, {
  IconManagerInlineBlockComponentProps,
} from '../../../components/IconManagerInlineBlockComponent'
import IconManagerInputComponent from '../../../components/IconManagerInputComponent'
import {mediaPreview} from '../../../ext/mediaPreview'
import IconManagerPluginOptions from '../../../types/IconManagerPluginOptions'
import {IconManagerType} from '../../../types/IconManagerType'
import extraFields from './extra.fields'
import IconManagerMetadata from './metadata'

const IconManagerObject = (pluginOptions: void | IconManagerPluginOptions): any =>
  defineType({
    type: 'object',
    name: IconManagerMetadata.name,
    title: IconManagerMetadata.title,
    preview: {
      select: {
        icon: 'icon',
        metadata: 'metadata',
      },
      prepare(value) {
        return {
          title: value.metadata?.iconName || value.icon || '???',
          subtitle: value.metadata.collectionName || undefined,
          media: mediaPreview(value),
        }
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
        IconManagerInputComponent(props as ObjectInputProps<IconManagerType>, pluginOptions),
      inlineBlock: (props) =>
        IconManagerInlineBlockComponent(props as IconManagerInlineBlockComponentProps),
      diff: IconManagerDiffComponent,
    },
  })

export default IconManagerObject
