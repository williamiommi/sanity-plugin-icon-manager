import {BlockProps} from 'sanity'
import {IconManagerType} from '../../types/IconManagerType'
import IconPreview from '../IconPreview'

export type IconManagerInlineBlockComponentProps = BlockProps & IconManagerType

const IconManagerInlineBlockComponent = (props: BlockProps) => {
  const value = props.value as unknown as IconManagerType
  const hasValidIcon = value.icon && value.metadata
  const IconInlinePreview = () => (
    <div style={{padding: '0 10px'}}>
      <IconPreview
        value={{icon: value.icon, metadata: value.metadata}}
        width='1rem'
        height='1rem'
        hideText
      />
    </div>
  )

  return props.renderDefault({
    ...props,
    renderPreview: hasValidIcon ? IconInlinePreview : props.renderPreview,
  })
}

export default IconManagerInlineBlockComponent
