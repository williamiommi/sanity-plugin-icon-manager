import {LaunchIcon} from '@sanity/icons'
import {Box, Flex, Text} from '@sanity/ui'

interface RowProps {
  heading: string
  value?: string
  href?: string
}

const Row = ({heading, value, href}: RowProps) => {
  return (
    <Flex gap={2} direction={['column', 'column', 'row', 'row']}>
      <Text weight='bold' style={{width: '85px'}} size={1}>
        {heading}
      </Text>
      <Text size={1} style={{width: 'calc(100% - 85px)'}}>
        {!href && value}
        {href && (
          <Flex as='a' align='center' href={href} target='_blank' rel='noreferrer'>
            <Box as='span' marginRight={1}>
              {value}
              <LaunchIcon width={12} style={{marginLeft: '2px'}} />
            </Box>
          </Flex>
        )}
      </Text>
    </Flex>
  )
}

export default Row
