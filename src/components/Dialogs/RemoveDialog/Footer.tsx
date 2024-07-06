import {Button, Card, Flex} from '@sanity/ui'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../../lib/constants'
import {useAppStoreContext} from '../../../store/context'

const Footer = () => {
  const {t} = useTranslation(I18N_NAMESPACE)
  const closeRemoveDialog = useAppStoreContext((s) => s.closeRemoveDialog)
  const removeIcon = useAppStoreContext((s) => s.removeIcon)

  return (
    <Card borderTop>
      <Flex gap={2} justify='flex-end' margin={2}>
        <Button
          text={t('dialog.remove.cancel.cta')}
          mode='bleed'
          tone='critical'
          fontSize={2}
          style={{cursor: 'pointer'}}
          onClick={closeRemoveDialog}
        />
        <Button
          text={t('dialog.remove.confirm.cta')}
          mode='bleed'
          tone='positive'
          fontSize={2}
          style={{cursor: 'pointer'}}
          onClick={removeIcon}
        />
      </Flex>
    </Card>
  )
}

export default Footer
