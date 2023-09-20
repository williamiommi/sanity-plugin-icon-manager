import {Button, Card, Flex, Text, TextInput, useTheme} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'
import BorderIcon from '../../icons/BorderIcon'
import HeightIcon from '../../icons/HeightIcon'
import LinkIcon from '../../icons/LinkIcon'
import UnlinkIcon from '../../icons/UnlinkIcon'
import WidthIcon from '../../icons/WidthIcon'

const Size = () => {
  const {sanity: theme} = useTheme()
  const size = useAppStoreContext((s) => s.size)
  const uniqueSize = useAppStoreContext((s) => s.uniqueSize)
  const previewBorder = useAppStoreContext((s) => s.previewBorder)
  const setWidth = useAppStoreContext((s) => s.setWidth)
  const setHeight = useAppStoreContext((s) => s.setHeight)
  const toggleUniqueSize = useAppStoreContext((s) => s.toggleUniqueSize)
  const togglePreviewBorder = useAppStoreContext((s) => s.togglePreviewBorder)

  return (
    <Flex
      direction={['column', 'column', 'row']}
      gap={[2, 2, 1]}
      align={['flex-start', 'flex-start', 'center']}
      style={{width: '100%'}}
    >
      <Text weight='bold' size={1} style={{width: '100px'}}>
        Size:
      </Text>
      <Flex gap={1} align='center' style={{width: '100%'}}>
        <Card flex={1}>
          <TextInput
            type='number'
            min={0}
            value={size.width}
            fontSize={1}
            padding={2}
            space={3}
            style={{paddingLeft: '22px', paddingRight: '2px'}}
            icon={<WidthIcon width={15} color={theme.color.button.ghost.primary.enabled.fg} />}
            onChange={setWidth}
          />
        </Card>
        <Card flex={1}>
          <TextInput
            type='number'
            min={0}
            value={size.height}
            fontSize={1}
            padding={2}
            style={{paddingLeft: '22px', paddingRight: '2px'}}
            icon={<HeightIcon width={15} color={theme.color.button.ghost.primary.enabled.fg} />}
            onChange={setHeight}
          />
        </Card>
        <Button
          title='Constrain proportions'
          tone='primary'
          mode={uniqueSize ? 'default' : 'ghost'}
          icon={
            uniqueSize ? <LinkIcon width={14} height={14} /> : <UnlinkIcon width={14} height={14} />
          }
          fontSize={1}
          padding={2}
          style={{width: '25px', cursor: 'pointer'}}
          onClick={toggleUniqueSize}
        />
        <Button
          title='Show boundaries'
          tone='primary'
          mode={previewBorder ? 'default' : 'ghost'}
          icon={<BorderIcon width={14} height={14} />}
          fontSize={1}
          padding={2}
          style={{width: '25px', cursor: 'pointer'}}
          onClick={togglePreviewBorder}
        />
      </Flex>
    </Flex>
  )
}

export default Size
