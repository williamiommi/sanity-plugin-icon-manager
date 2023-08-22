import {BookIcon} from '@sanity/icons'
import {Button} from '@sanity/ui'
import {FieldProps} from 'sanity'
import {useAppStore} from '../store'
import SearchDialog from './SearchDialog'

type IconifyFieldProps = FieldProps & {}

const IconifyField = (props: IconifyFieldProps) => {
  const isDialogOpen = useAppStore((s) => s.isDialogOpen)
  const openDialogOpen = useAppStore((s) => s.openDialogOpen)
  return (
    <div>
      {props.renderDefault({...props, children: undefined})}
      <Button
        text='Select icon'
        tone='primary'
        paddingY={3}
        paddingX={4}
        icon={BookIcon}
        style={{cursor: 'pointer'}}
        onClick={openDialogOpen}
      />
      {isDialogOpen && <SearchDialog />}
    </div>
  )
}

export default IconifyField
