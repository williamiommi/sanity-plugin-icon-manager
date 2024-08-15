import {DocumentIcon} from '@sanity/icons'
import {Badge, Box, Flex, Text} from '@sanity/ui'
import {ReactNode} from 'react'
import {DiffCard, DiffProps, DiffTooltip, ObjectDiff} from 'sanity'

import usePluginTranslation from '../../hooks/usePluginTranslation'
import {IconManagerType} from '../../types/IconManagerType'
import IconPreview from '../IconPreview'

export default function IconDiffWrapper(props: DiffProps<ObjectDiff<IconManagerType>>): ReactNode {
  const {t} = usePluginTranslation()
  const {fromValue, toValue, action} = props.diff

  // CASE 1: icon unchanged
  if (action === 'unchanged' && fromValue.icon) {
    return (
      <Flex justify='center' style={{margin: '10px auto'}}>
        <IconPreview value={fromValue} />
      </Flex>
    )
  }
  // CASE 2: icon changed
  if (action === 'changed' && fromValue.icon && toValue.icon) {
    return (
      <Box style={{margin: '10px auto'}}>
        <Flex align='center' gap={5}>
          <IconPreview value={fromValue} /> → <IconPreview value={toValue} />
        </Flex>
      </Box>
    )
  }
  // CASE 3: icon removed
  if (action === 'removed' && fromValue.icon && !toValue) {
    return (
      <Box style={{margin: '10px auto'}}>
        <Flex align='center' gap={5}>
          <IconPreview value={fromValue} /> →{' '}
          <Badge tone='critical' size={1}>
            {t('diff.changes.removed.badge')}
          </Badge>
        </Flex>
      </Box>
    )
  }
  // CASE 4: icon added
  if (action === 'added' && toValue.icon) {
    return (
      <Box style={{margin: '10px auto'}}>
        <Flex align='center' gap={5}>
          <Badge tone='primary' size={1}>
            {t('diff.changes.empty.badge')}
          </Badge>{' '}
          → <IconPreview value={toValue} />
        </Flex>
      </Box>
    )
  }

  return (
    <DiffTooltip diff={props.diff}>
      <DiffCard diff={props.diff}>
        <Box padding={2}>
          <Flex align='center' gap={3}>
            <DocumentIcon fontSize={32} />
            <Text muted size={2}>
              {t('diff.changes.untitled.label')}
            </Text>
          </Flex>
        </Box>
      </DiffCard>
    </DiffTooltip>
  )
}
