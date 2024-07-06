import {Flex, Heading} from '@sanity/ui'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../../lib/constants'
import CogIcon from '../../icons/CogIcon'

const Header = () => {
  const {t} = useTranslation(I18N_NAMESPACE)

  return (
    <Flex align='center' gap={3}>
      <CogIcon width={30} />
      <Heading size={2}>{t('dialog.configure.title')}</Heading>
    </Flex>
  )
}

export default Header
