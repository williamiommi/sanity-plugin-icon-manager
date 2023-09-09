import {BookIcon, InfoOutlineIcon, TrashIcon} from '@sanity/icons'
import {Button, Card, Flex, Text, Tooltip} from '@sanity/ui'
import {useAppStoreContext} from '../../store/context'
import CustomizeIcon from '../icons/CustomizeIcon'

const ButtonsBoard = () => {
  const openInfoDialog = useAppStoreContext((s) => s.openInfoDialog)
  const openConfigDialog = useAppStoreContext((s) => s.openConfigDialog)
  const openSearchDialog = useAppStoreContext((s) => s.openSearchDialog)
  const openRemoveDialog = useAppStoreContext((s) => s.openRemoveDialog)
  const sanityUserCanEdit = useAppStoreContext((s) => s.sanityUserCanEdit)
  return (
    <Flex direction='column' align='flex-start'>
      <Tooltip
        portal
        placement='left'
        fallbackPlacements={['right', 'bottom']}
        content={
          <Card padding={1}>
            <Text size={1}>Show Info</Text>
          </Card>
        }
      >
        <Button
          mode='bleed'
          tone='primary'
          icon={<InfoOutlineIcon width={25} height={25} />}
          onClick={openInfoDialog}
        />
      </Tooltip>
      <Tooltip
        portal
        placement='left'
        fallbackPlacements={['right', 'bottom']}
        content={
          <Card padding={1}>
            <Text size={1}>Customize Icon</Text>
          </Card>
        }
      >
        <Button
          mode='bleed'
          tone='positive'
          icon={<CustomizeIcon width={19} height={19} />}
          onClick={openConfigDialog}
          disabled={!sanityUserCanEdit}
        />
      </Tooltip>
      <Tooltip
        portal
        placement='left'
        fallbackPlacements={['right', 'bottom']}
        content={
          <Card padding={1}>
            <Text size={1}>Change Icon</Text>
          </Card>
        }
      >
        <Button
          mode='bleed'
          tone='primary'
          icon={<BookIcon width={25} height={25} />}
          onClick={openSearchDialog}
          disabled={!sanityUserCanEdit}
        />
      </Tooltip>
      <Tooltip
        portal
        placement='left'
        fallbackPlacements={['right', 'bottom']}
        content={
          <Card padding={1}>
            <Text size={1}>Delete Icon</Text>
          </Card>
        }
      >
        <Button
          mode='bleed'
          tone='critical'
          icon={<TrashIcon width={25} height={25} />}
          onClick={openRemoveDialog}
          disabled={!sanityUserCanEdit}
        />
      </Tooltip>
    </Flex>
  )
}

export default ButtonsBoard
