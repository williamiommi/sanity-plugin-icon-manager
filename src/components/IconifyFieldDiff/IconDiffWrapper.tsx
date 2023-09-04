import {Badge, Box, Card, Flex, Text} from '@sanity/ui'
import {ObjectDiff} from 'sanity'
import {IconifyType} from '../../types/IconifyType'
import IconPreview from '../IconPreview'

interface IconDiffProps {
  diff: ObjectDiff<IconifyType>
}

const IconDiffWrapper = (props: IconDiffProps) => {
  const {fromValue, toValue, action} = props.diff

  // CASE 1: icon unchanged
  if (action === 'unchanged') {
    return (
      <Flex justify='center' style={{margin: '10px auto'}}>
        <IconPreview value={fromValue} />
      </Flex>
    )
  }
  // CASE 2: icon changed
  if (action === 'changed' && fromValue && toValue) {
    return (
      <Box style={{margin: '10px auto'}}>
        <Flex align='center' gap={5}>
          <IconPreview value={fromValue} /> → <IconPreview value={toValue} />
        </Flex>
      </Box>
    )
  }
  // CASE 3: icon removed
  if (action === 'removed' && fromValue && !toValue) {
    return (
      <Box style={{margin: '10px auto'}}>
        <Flex align='center' gap={5}>
          <IconPreview value={fromValue} /> →{' '}
          <Badge tone='critical' size={1}>
            REMOVED
          </Badge>
        </Flex>
      </Box>
    )
  }
  // CASE 4: icon added
  if (action === 'added' && toValue) {
    return (
      <Box style={{margin: '10px auto'}}>
        <Flex align='center' gap={5}>
          <Badge tone='primary' size={1}>
            EMPTY
          </Badge>{' '}
          → <IconPreview value={toValue} />
        </Flex>
      </Box>
    )
  }

  return (
    <Card tone='critical' padding={2}>
      <Text size={1}>UNABLED TO RENDER UI DIFF</Text>
    </Card>
  )
}

export default IconDiffWrapper
