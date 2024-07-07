import {Button, Card, Flex} from '@sanity/ui'
import usePluginTranslation from '../../../hooks/usePluginTranslation'
import {useAppStoreContext} from '../../../store/context'

const Footer = () => {
  const {t} = usePluginTranslation()
  const clearConfiguration = useAppStoreContext((s) => s.clearConfiguration)
  const saveConfiguration = useAppStoreContext((s) => s.saveConfiguration)

  return (
    <Card borderTop>
      <Flex
        direction={['column', 'column', 'column', 'row']}
        margin={2}
        align={'center'}
        justify='flex-end'
        gap={2}
      >
        <Flex align='center' gap={2}>
          <Button
            text={t('dialog.configure.reset.cta')}
            mode='bleed'
            tone='critical'
            fontSize={2}
            style={{cursor: 'pointer'}}
            onClick={clearConfiguration}
          />
          <Button
            text={t('dialog.configure.save.cta')}
            mode='bleed'
            tone='positive'
            fontSize={2}
            style={{cursor: 'pointer'}}
            onClick={saveConfiguration}
          />
        </Flex>
      </Flex>
    </Card>
  )
}

export default Footer
