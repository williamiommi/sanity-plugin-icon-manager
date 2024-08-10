import {Flex, Heading} from '@sanity/ui'

import usePluginTranslation from '../../../hooks/usePluginTranslation'
import CogIcon from '../../icons/CogIcon'

const Header = () => {
  const {t} = usePluginTranslation()

  return (
    <Flex align='center' gap={3}>
      <CogIcon width={30} />
      <Heading size={2}>{t('dialog.configure.title')}</Heading>
    </Flex>
  )
}

export default Header
