import {defineField, defineType, FieldProps, ObjectInputProps} from 'sanity'

import IconManagerDiffComponent from '../../../components/IconManagerDiffComponent'
import IconManagerInlineBlockComponent, {
  IconManagerInlineBlockComponentProps,
} from '../../../components/IconManagerInlineBlockComponent'
import IconManagerInputComponent from '../../../components/IconManagerInputComponent'
import {mediaPreview} from '../../../ext/mediaPreview'
import IconManagerPluginOptions from '../../../types/IconManagerPluginOptions'
import {IconManagerType} from '../../../types/IconManagerType'
import IconManagerMetadataInfo from '../IconManagerMetadata/info'
import IconManagerInfo from './info'

const IconManagerObject = (pluginOptions: void | IconManagerPluginOptions): unknown =>
  defineType({
    type: 'object',
    name: IconManagerInfo.name,
    title: IconManagerInfo.title,
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
        type: IconManagerMetadataInfo.name,
        name: 'metadata',
        title: 'Metadata',
      }),
    ],
    components: {
      input: (props) =>
        IconManagerInputComponent(props as ObjectInputProps<IconManagerType>, pluginOptions),
      inlineBlock: (props) =>
        IconManagerInlineBlockComponent(props as IconManagerInlineBlockComponentProps),
      diff: IconManagerDiffComponent,
      // remove indent border from input
      field: (props: FieldProps) => props.renderDefault({...props, level: 0}),
    },
  })

export default IconManagerObject
