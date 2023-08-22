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
      <button type='button' onClick={openDialogOpen}>
        Open
      </button>
      {isDialogOpen && <SearchDialog />}
    </div>
  )
}

export default IconifyField
