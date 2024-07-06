import {Flex, Heading} from '@sanity/ui'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../../lib/constants'
import TrashIcon from '../../icons/TrashIcon'

export default function Header() {
  const {t} = useTranslation(I18N_NAMESPACE)
  return (
    <Flex align='center' gap={3} padding={0}>
      <TrashIcon width={30} />
      <Heading size={2}>{t('dialog.remove.icon.title')}</Heading>
    </Flex>
  )
}
