import {Icon} from '@iconify-icon/react'
import {Flex} from '@sanity/ui'
import {useAppStore} from '../store'
import {getFlipValue} from '../store/ConfigureSlice'
import ConfigDialog from './ConfigDialog'
import InfoDialog from './InfoDialog'
import {StyledSelectedIcon} from './SelectedIcon.style'

interface SelectedIconProps {}

const SelectedIcon = (props: SelectedIconProps) => {
  const SV = useAppStore((s) => s.sanityValue)

  if (!SV?.icon) return null

  return (
    <Flex gap={1}>
      <StyledSelectedIcon border bgColor={SV.metadata.color?.hex}>
        <Icon
          icon={SV.icon}
          width={40}
          height={40}
          style={{display: 'block'}}
          rotate={SV.metadata.rotate}
          flip={getFlipValue(SV.metadata.flipH, SV.metadata.flipV)}
        />
      </StyledSelectedIcon>
      <Flex direction='column' justify='flex-end' align='flex-start'>
        <InfoDialog />
        <ConfigDialog />
      </Flex>
    </Flex>
  )
}

export default SelectedIcon
