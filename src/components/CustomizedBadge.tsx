import {Card, Text} from '@sanity/ui'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../lib/constants'
import BaseTooltip from './BaseTooltip'

export default function CustomizedBadge() {
  const {t} = useTranslation(I18N_NAMESPACE)
  return (
    <BaseTooltip portal placement='top' content={t('icon.customized.label')}>
      <Card tone='primary' radius={0} padding={2}>
        <Text size={0} weight='semibold'>
          {t('icon.customized.badge')}
        </Text>
      </Card>
    </BaseTooltip>
  )
}
