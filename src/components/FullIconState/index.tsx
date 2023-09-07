import {BookIcon} from '@sanity/icons'
import {Flex, useTheme} from '@sanity/ui'
import {useAppStoreContext} from '../../store/context'
import RemoveDialog from '../Dialogs/RemoveDialog'
import SearchDialog from '../Dialogs/SearchDialog'
import SelectedIcon from '../SelectedIcon'
import {StyledBaseButton} from '../shared/SharedStyledComponents'

const FullIconState = () => {
  const {sanity: theme} = useTheme()
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const sanityUserCanEdit = useAppStoreContext((s) => s.sanityUserCanEdit)
  const openSearchDialog = useAppStoreContext((s) => s.openSearchDialog)

  if (!sanityValue?.icon) return null

  return (
    <>
      <SelectedIcon />
      <Flex
        gap={3}
        paddingTop={1}
        marginTop={2}
        style={{
          borderTop: `1px solid ${theme.color.card.enabled.border}`,
        }}
      >
        <StyledBaseButton
          text='Change icon'
          mode='bleed'
          tone='primary'
          icon={<BookIcon width={18} />}
          fontSize={1}
          onClick={openSearchDialog}
          disabled={!sanityUserCanEdit}
        />
        <RemoveDialog />
      </Flex>
      <SearchDialog />
    </>
  )
}

export default FullIconState
