import {Flex, Heading} from '@sanity/ui'

import usePluginTranslation from '../../../hooks/usePluginTranslation'
import TrashIcon from '../../icons/TrashIcon'

export default function Header() {
  const {t} = usePluginTranslation()
  return (
    <Flex align='center' gap={3} padding={0}>
      <TrashIcon width={30} />
      <Heading size={2}>{t('dialog.remove.icon.title')}</Heading>
    </Flex>
  )
}
