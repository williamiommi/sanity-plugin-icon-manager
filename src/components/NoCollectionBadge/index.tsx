import {Badge, Flex} from '@sanity/ui'
import {ReactNode} from 'react'

import usePluginTranslation from '../../hooks/usePluginTranslation'
import SimpleHtmlRenderer from '../SimpleHtmlRenderer'

export default function NoCollectionBadge(): ReactNode {
  const {t} = usePluginTranslation()
  return (
    <Flex marginY={4} justify='center'>
      <Badge
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
