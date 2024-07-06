import {Card, Text, Tooltip} from '@sanity/ui'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../lib/constants'

export default function CustomizedBadge() {
  const {t} = useTranslation(I18N_NAMESPACE)
  return (
    <Tooltip
      portal
      placement='top'
      content={
        <Card padding={2}>
          <Text size={1}>{t('icon.customized.label')}</Text>
        </Card>
      }
    >
      <Card tone='primary' radius={0} padding={2}>
        <Text size={0} weight='semibold'>
          {t('icon.customized.badge')}
        </Text>
      </Card>
    </Tooltip>
  )
}
