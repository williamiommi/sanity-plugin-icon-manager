import {Flex} from '@sanity/ui'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../../lib/constants'
import IconifySmile from '../../icons/IconifySmile'

const Header = () => {
  const {t} = useTranslation(I18N_NAMESPACE)
  return (
    <Flex align='center' gap={2}>
      <IconifySmile /> {t('dialog.add.title')}
    </Flex>
  )
}

export default Header
