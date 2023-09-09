import {BookIcon, InfoOutlineIcon, TrashIcon} from '@sanity/icons'
import {Button, Flex} from '@sanity/ui'
import {useAppStoreContext} from '../../store/context'
import CustomizeIcon from '../icons/CustomizeIcon'
import ButtonTooltip from './ButtonTooltip'

const ButtonsBoard = () => {
  const openInfoDialog = useAppStoreContext((s) => s.openInfoDialog)
  const openConfigDialog = useAppStoreContext((s) => s.openConfigDialog)
  const openSearchDialog = useAppStoreContext((s) => s.openSearchDialog)
  const openRemoveDialog = useAppStoreContext((s) => s.openRemoveDialog)
  const sanityUserCanEdit = useAppStoreContext((s) => s.sanityUserCanEdit)

  return (
    <Flex direction='column' align='flex-start'>
      <ButtonTooltip tooltipText='Show Info'>
        <Button
          mode='bleed'
          tone='primary'
          icon={<InfoOutlineIcon width={25} height={25} />}
          style={{cursor: 'pointer'}}
          onClick={openInfoDialog}
        />
      </ButtonTooltip>
      <ButtonTooltip tooltipText='Customize Icon'>
        <Button
          mode='bleed'
          tone='positive'
          icon={<CustomizeIcon width={19} height={19} />}
          style={{cursor: 'pointer'}}
          onClick={openConfigDialog}
          disabled={!sanityUserCanEdit}
        />
      </ButtonTooltip>
      <ButtonTooltip tooltipText='Change Icon'>
        <Button
          mode='bleed'
          tone='primary'
          icon={<BookIcon width={25} height={25} />}
          style={{cursor: 'pointer'}}
          onClick={openSearchDialog}
          disabled={!sanityUserCanEdit}
        />
      </ButtonTooltip>
      <ButtonTooltip tooltipText='Delete Icon'>
        <Button
          mode='bleed'
          tone='critical'
          icon={<TrashIcon width={25} height={25} />}
          style={{cursor: 'pointer'}}
          onClick={openRemoveDialog}
          disabled={!sanityUserCanEdit}
        />
      </ButtonTooltip>
    </Flex>
  )
}

export default ButtonsBoard
