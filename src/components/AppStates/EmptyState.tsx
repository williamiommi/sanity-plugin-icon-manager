import {AddIcon} from '@sanity/icons'
import {Button} from '@sanity/ui'
import {ReactNode} from 'react'

import usePluginTranslation from '../../hooks/usePluginTranslation'
import {useAppStoreContext} from '../../store/context'

export default function EmptyState(): ReactNode {
  const {t} = usePluginTranslation()
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const userCan = useAppStoreContext((s) => s.userCan)
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
      disabled={!userCan.edit}
    />
  )
}
