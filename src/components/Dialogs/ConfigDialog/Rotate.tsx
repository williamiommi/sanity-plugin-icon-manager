import {Flex, Grid} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'
import Rotate180 from '../../icons/Rotate180'
import Rotate270 from '../../icons/Rotate270'
import Rotate90 from '../../icons/Rotate90'
import {StyledBaseButton} from '../../shared/SharedStyledComponents'
import {StyledHeading} from './Styled'

const Rotate = () => {
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
      <StyledHeading>Rotate:</StyledHeading>
      <Grid columns={[2, 2, 4]} gap={1} style={{width: '100%'}}>
        <StyledBaseButton
          text='0°'
          mode={`${rotate === 0 ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={0}
          padding={2}
          paddingX={0}
          style={{width: '100%'}}
          data-value={0}
          onClick={setRotate0}
        />
        <StyledBaseButton
          icon={<Rotate90 width={15} height={15} />}
          text='90°'
          mode={`${rotate === 1 ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={0}
          padding={2}
          paddingX={0}
          style={{width: '100%'}}
          data-value={1}
          onClick={setRotate90}
        />
        <StyledBaseButton
          icon={<Rotate180 width={15} height={15} />}
          text='180°'
          mode={`${rotate === 2 ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={0}
          padding={2}
          paddingX={0}
          style={{width: '100%'}}
          data-value={2}
          onClick={setRotate180}
        />
        <StyledBaseButton
          icon={<Rotate270 width={15} height={15} />}
          text='270°'
          mode={`${rotate === 3 ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={0}
          padding={2}
          paddingX={0}
          style={{width: '100%'}}
          data-value={3}
          onClick={setRotate270}
        />
      </Grid>
    </Flex>
  )
}

export default Rotate
