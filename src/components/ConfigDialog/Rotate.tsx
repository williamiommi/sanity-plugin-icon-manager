import {Flex, Grid} from '@sanity/ui'
import useConfigurationState from '../../hooks/useConfigurationState'
import Rotate180 from '../icons/Rotate180'
import Rotate270 from '../icons/Rotate270'
import Rotate90 from '../icons/Rotate90'
import {StyledBaseButton} from '../shared/SharedStyledComponents'
import {StyledHeading} from './Styled'

const Rotate = () => {
  const {rotate, onChangeRotate} = useConfigurationState()
  return (
    <Flex
      direction={['column', 'column', 'row']}
      gap={[2, 2, 1]}
      align={['flex-start', 'flex-start', 'center']}
      style={{width: '100%'}}
    >
      <StyledHeading>Rotate:</StyledHeading>
      <Grid columns={2} gap={1} style={{width: '100%'}}>
        <StyledBaseButton
          text='0°'
          mode={`${rotate === 0 ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={0}
          padding={2}
          paddingX={0}
          style={{width: '100%'}}
          data-value={0}
          onClick={onChangeRotate}
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
          onClick={onChangeRotate}
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
          onClick={onChangeRotate}
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
          onClick={onChangeRotate}
        />
      </Grid>
    </Flex>
  )
}

export default Rotate
