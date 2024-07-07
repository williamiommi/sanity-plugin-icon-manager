import {Flex, Heading} from '@sanity/ui'
import usePluginTranslation from '../../../hooks/usePluginTranslation'
import {useAppStoreContext} from '../../../store/context'
import IconPreview from '../../IconPreview'

export default function Header() {
  const {t} = usePluginTranslation()
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  return (
    <Flex align='center' gap={3} padding={0}>
      <IconPreview value={sanityValue} width={50} height={50} hideText />
      <Heading size={2}>{t('dialog.json.title')}</Heading>
    </Flex>
  )
}
