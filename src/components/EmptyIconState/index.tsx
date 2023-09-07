import {BookIcon} from '@sanity/icons'
import {useAppStoreContext} from '../../store/context'
import SearchDialog from '../Dialogs/SearchDialog'
import {StyledBaseButton} from '../shared/SharedStyledComponents'

const EmptyIconState = () => {
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const sanityUserCanEdit = useAppStoreContext((s) => s.sanityUserCanEdit)
  const openSearchDialog = useAppStoreContext((s) => s.openSearchDialog)

  if (sanityValue?.icon) return null

  return (
    <>
      <StyledBaseButton
        text='Select icon'
        mode='default'
        tone='primary'
        icon={<BookIcon width={18} />}
        fontSize={1}
        onClick={openSearchDialog}
        disabled={!sanityUserCanEdit}
      />
      <SearchDialog />
    </>
  )
}

export default EmptyIconState
