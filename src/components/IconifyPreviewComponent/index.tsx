import {PreviewProps} from 'sanity'
import {IconifyType} from '../../types/IconifyType'
import IconPreview from '../IconPreview'

export type IconifyPreviewComponentProps = PreviewProps & IconifyType

const IconifyPreviewComponent = (props: IconifyPreviewComponentProps) => {
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

export default IconifyPreviewComponent
