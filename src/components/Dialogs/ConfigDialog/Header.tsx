import {CogIcon} from '@sanity/icons'
import {Flex} from '@sanity/ui'

const Header = () => (
  <Flex align='center' gap={3}>
    <CogIcon />
    <span>Configuration</span>
  </Flex>
)

export default Header
