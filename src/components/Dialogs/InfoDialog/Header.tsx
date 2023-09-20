import {Flex} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'
import IconPreview from '../../IconPreview'

const Header = () => {
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  if (!sanityValue?.icon) return null
  return (
    <Flex>
      <IconPreview icon={sanityValue.icon} width={25} height={25} />
    </Flex>
  )
}

export default Header
