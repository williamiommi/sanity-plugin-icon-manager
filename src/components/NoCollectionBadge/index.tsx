import {Badge, Flex} from '@sanity/ui'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../lib/constants'
import SimpleHtmlRenderer from '../SimpleHtmlRenderer'

export default function NoCollectionBadge() {
  const {t} = useTranslation(I18N_NAMESPACE)
  return (
    <Flex marginY={4} justify='center'>
      <Badge
        mode='outline'
        tone='critical'
        margin={4}
        padding={4}
        flex={1}
        style={{textAlign: 'center'}}
        radius={0}
      >
        <SimpleHtmlRenderer html={t('no.collections.message')} />
      </Badge>
    </Flex>
  )
}
