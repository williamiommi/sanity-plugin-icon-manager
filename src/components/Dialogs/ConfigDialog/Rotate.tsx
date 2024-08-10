import {Button, Flex, Grid, Text} from '@sanity/ui'

import usePluginTranslation from '../../../hooks/usePluginTranslation'
import {useAppStoreContext} from '../../../store/context'

const Rotate = () => {
  const {t} = usePluginTranslation()
  const rotate = useAppStoreContext((s) => s.rotate)
  const setRotate0 = useAppStoreContext((s) => s.setRotate0)
  const setRotate90 = useAppStoreContext((s) => s.setRotate90)
  const setRotate180 = useAppStoreContext((s) => s.setRotate180)
  const setRotate270 = useAppStoreContext((s) => s.setRotate270)

  return (
    <Flex
      direction={['column', 'column', 'row']}
      gap={[2, 2, 1]}
      align={['flex-start', 'flex-start', 'center']}
      style={{width: '100%'}}
    >
      <Text weight='bold' size={1} style={{width: '100px'}}>
        {t('dialog.configure.filter.rotate.label')}
      </Text>
      <Grid columns={[2, 2, 4]} gap={1} style={{width: '100%'}}>
        <Button
          text='0°'
          mode={`${rotate === 0 ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={0}
          padding={2}
          paddingX={0}
          style={{width: '100%', cursor: 'pointer'}}
          data-value={0}
          onClick={setRotate0}
        />
        <Button
          text='90°'
          mode={`${rotate === 1 ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={0}
          padding={2}
          paddingX={0}
          style={{width: '100%', cursor: 'pointer'}}
          data-value={1}
          onClick={setRotate90}
        />
        <Button
          text='180°'
          mode={`${rotate === 2 ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={0}
          padding={2}
          paddingX={0}
          style={{width: '100%', cursor: 'pointer'}}
          data-value={2}
          onClick={setRotate180}
        />
        <Button
          text='270°'
          mode={`${rotate === 3 ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={0}
          padding={2}
          paddingX={0}
          style={{width: '100%', cursor: 'pointer'}}
          data-value={3}
          onClick={setRotate270}
        />
      </Grid>
    </Flex>
  )
}

export default Rotate
