import {Flex, Grid} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'
import HeightIcon from '../../icons/HeightIcon'
import WidthIcon from '../../icons/WidthIcon'
import {StyledBaseButton} from '../../shared/SharedStyledComponents'
import {StyledHeading} from './Styled'

const Flip = () => {
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
      <StyledHeading>Flip:</StyledHeading>
      <Grid columns={2} gap={1} style={{width: '100%'}}>
        <StyledBaseButton
          icon={<WidthIcon width={15} height={15} />}
          title='Horizontal'
          mode={`${hFlip ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={1}
          padding={2}
          onClick={toggleHFlip}
          style={{width: '100%'}}
        />
        <StyledBaseButton
          icon={<HeightIcon width={15} height={15} />}
          title='Vertical'
          mode={`${vFlip ? 'default' : 'ghost'}`}
          tone='primary'
          fontSize={1}
          padding={2}
          onClick={toggleVFlip}
          style={{width: '100%'}}
        />
      </Grid>
    </Flex>
  )
}

export default Flip
