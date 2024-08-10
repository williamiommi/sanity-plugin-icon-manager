import {PreviewProps} from 'sanity'

import {IconManagerType} from '../../types/IconManagerType'
import IconPreview from '../IconPreview'

export type IconManagerPreviewComponentProps = PreviewProps & IconManagerType

const IconManagerPreviewComponent = (props: IconManagerPreviewComponentProps) => {
  if (props.isPlaceholder || !props.icon) return props.renderDefault(props)

  return props.renderDefault({
    ...props,
    title: props.icon,
    media: (
      <IconPreview
        value={{icon: props.icon, metadata: props.metadata}}
        width='80%'
        height='80%'
        hideText
      />
    ),
  })
}

export default IconManagerPreviewComponent
