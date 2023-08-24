import {BookIcon, TrashIcon} from '@sanity/icons'
import {Button} from '@sanity/ui'
import {FieldProps} from 'sanity'
import useSearchBag from '../hooks/useSearchBag'
import useSetup from '../hooks/useSetup'
import {useAppStore} from '../store'
import SearchDialog from './SearchDialog'

type IconifyFieldProps = FieldProps & {}

const IconifyField = (props: IconifyFieldProps) => {
  useSetup(props)
  const isDialogOpen = useAppStore((s) => s.isDialogOpen)
  const openDialogOpen = useAppStore((s) => s.openDialogOpen)
  const {clearIcon} = useSearchBag()

  return (
    <div>
      {props.renderDefault({...props, children: undefined})}
      {props.value && <pre>{JSON.stringify(props.value, null, 2)}</pre>}
      <Button
        text={`${props.value ? 'Change' : 'Select'} icon`}
        tone='primary'
        paddingY={3}
        paddingX={4}
        icon={BookIcon}
        style={{cursor: 'pointer'}}
        onClick={openDialogOpen}
      />
      {props.value && (
        <Button
          text='Clear icon'
          tone='critical'
          paddingY={3}
          paddingX={4}
          icon={TrashIcon}
          style={{cursor: 'pointer'}}
          onClick={clearIcon}
        />
      )}
      {isDialogOpen && <SearchDialog />}
    </div>
  )
}

export default IconifyField
