import {Flex} from '@sanity/ui'
import usePluginTranslation from '../../../hooks/usePluginTranslation'
import IconifySmile from '../../icons/IconifySmile'

const Header = () => {
  const {t} = usePluginTranslation()
  return (
    <Flex align='center' gap={2}>
      <IconifySmile /> {t('dialog.add.title')}
    </Flex>
  )
}

export default Header
