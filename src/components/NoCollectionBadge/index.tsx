import {Badge, Flex} from '@sanity/ui'

export default function NoCollectionBadge() {
  return (
    <Flex marginY={4} justify='center'>
      <Badge
        mode='outline'
        tone='critical'
        margin={4}
        padding={4}
        flex={1}
        style={{textAlign: 'center'}}
        radius={0}
      >
        No available collections.
        <br />
        Check your plugin configuration.
      </Badge>
    </Flex>
  )
}
