import {Badge, Flex} from '@sanity/ui'

import usePluginTranslation from '../../hooks/usePluginTranslation'
import SimpleHtmlRenderer from '../SimpleHtmlRenderer'

export default function NoCollectionBadge() {
  const {t} = usePluginTranslation()
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
