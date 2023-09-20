import {Badge, Card, Flex, Text, Tooltip} from '@sanity/ui'
import {useAppStoreContext} from '../../store/context'
import ButtonsBoard from '../ButtonsBoard'
import IconPreview from '../IconPreview'
import CustomizeIcon from '../icons/CustomizeIcon'

const FilledState = () => {
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const hasBeenCustomized = useAppStoreContext((s) => s.hasBeenCustomized())

  if (!sanityValue?.icon) return null

  return (
    <Flex direction='row' align='center' gap={1}>
      <ButtonsBoard />
      <Card border paddingX={4} paddingY={3} style={{position: 'relative'}}>
        {hasBeenCustomized && (
          <Tooltip
            content={
              <Card padding={2}>
                <Text size={1}>Icon has been customized</Text>
              </Card>
            }
          >
            <Badge
              radius={0}
              mode='outline'
              tone='primary'
              style={{position: 'absolute', top: 0, right: 0, opacity: 0.5, cursor: 'help'}}
            >
              <CustomizeIcon width={15} height={15} />
            </Badge>
          </Tooltip>
        )}
        <IconPreview value={sanityValue} />
      </Card>
    </Flex>
  )
}

export default FilledState
