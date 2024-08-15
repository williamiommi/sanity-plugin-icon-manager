import {Flex} from '@sanity/ui'
import {ReactNode} from 'react'

import usePluginTranslation from '../../../hooks/usePluginTranslation'
import IconifySmile from '../../icons/IconifySmile'

export default function Header(): ReactNode {
  const {t} = usePluginTranslation()
  return (
    <Flex align='center' gap={2}>
      <IconifySmile /> {t('dialog.add.title')}
    </Flex>
  )
}
