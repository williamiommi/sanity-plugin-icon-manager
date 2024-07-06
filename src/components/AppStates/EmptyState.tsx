import {AddIcon} from '@sanity/icons'
import {Button} from '@sanity/ui'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../lib/constants'
import {useAppStoreContext} from '../../store/context'

const EmptyState = () => {
  const {t} = useTranslation(I18N_NAMESPACE)
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const sanityUserCanEdit = useAppStoreContext((s) => s.sanityUserCanEdit)
  const openSearchDialog = useAppStoreContext((s) => s.openSearchDialog)

  if (sanityValue?.icon) return null

  return (
    <Button
      mode='default'
      tone='primary'
      text={t('add.icon.label')}
      icon={<AddIcon width={18} />}
      fontSize={1}
      onClick={openSearchDialog}
      disabled={!sanityUserCanEdit}
    />
  )
}

export default EmptyState
