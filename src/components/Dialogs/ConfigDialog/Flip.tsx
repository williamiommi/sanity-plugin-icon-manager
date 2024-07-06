import {Button, Flex, Text} from '@sanity/ui'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../../lib/constants'
import {useAppStoreContext} from '../../../store/context'
import HeightIcon from '../../icons/HeightIcon'
import WidthIcon from '../../icons/WidthIcon'

const Flip = () => {
  const {t} = useTranslation(I18N_NAMESPACE)
  const hFlip = useAppStoreContext((s) => s.hFlip)
  const vFlip = useAppStoreContext((s) => s.vFlip)
  const toggleHFlip = useAppStoreContext((s) => s.toggleHFlip)
  const toggleVFlip = useAppStoreContext((s) => s.toggleVFlip)

  return (
    <Flex
      direction={['column', 'column', 'row']}
      gap={[2, 2, 1]}
      align={['flex-start', 'flex-start', 'center']}
      style={{width: '100%'}}
    >
      <Text weight='bold' size={1} style={{width: '100px'}}>
        {t('dialog.configure.filter.flip.label')}
      </Text>
      <Flex gap={1} style={{width: '100%'}}>
        <Button
          icon={<WidthIcon width={15} height={15} />}
          title={t('dialog.configure.filter.flip.horizontal.label')}
          mode={`${hFlip ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={1}
          padding={2}
          onClick={toggleHFlip}
          style={{cursor: 'pointer', width: '100%'}}
        />
        <Button
          icon={<HeightIcon width={15} height={15} />}
          title={t('dialog.configure.filter.flip.vertical.label')}
          mode={`${vFlip ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={1}
          padding={2}
          onClick={toggleVFlip}
          style={{cursor: 'pointer', width: '100%'}}
        />
      </Flex>
    </Flex>
  )
}

export default Flip
