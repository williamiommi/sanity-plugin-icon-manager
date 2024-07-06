/* eslint-disable react/jsx-no-bind */
import {EllipsisHorizontalIcon} from '@sanity/icons'
import {Box, Button, Card, Flex, Menu, MenuButton, Text, Tooltip} from '@sanity/ui'
import {useState} from 'react'
import {useTranslation} from 'sanity'
import {I18N_NAMESPACE} from '../../lib/constants'
import {useAppStoreContext} from '../../store/context'
import CustomizedBadge from '../CustomizedBadge'
import IconMenu from '../IconMenu'
import IconPreview from '../IconPreview'
import CogIcon from '../icons/CogIcon'
import DividerIcon from '../icons/DividerIcon'
import TrashIcon from '../icons/TrashIcon'
import SvgButtons from '../SvgButtons'

export default function FilledState() {
  const {t} = useTranslation(I18N_NAMESPACE)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const openConfigDialog = useAppStoreContext((s) => s.openConfigDialog)
  const openSearchDialog = useAppStoreContext((s) => s.openSearchDialog)
  const openRemoveDialog = useAppStoreContext((s) => s.openRemoveDialog)
  const hasBeenCustomized = useAppStoreContext((s) => s.hasBeenCustomized())
  const sanityUserCanEdit = useAppStoreContext((s) => s.sanityUserCanEdit)

  if (!sanityValue?.icon) return null

  const actions = [
    {
      icon: <CogIcon width={18} height={18} />,
      label: t('configure.icon.label'),
      tooltip: t('configure.icon.tooltip'),
      handleFn: openConfigDialog,
    },
    {
      icon: <DividerIcon width={18} height={18} />,
      label: t('change.icon.label'),
      tooltip: t('change.icon.tooltip'),
      handleFn: openSearchDialog,
    },
    {
      icon: <TrashIcon width={18} height={18} />,
      label: t('remove.icon.label'),
      tooltip: t('remove.icon.tooltip'),
      handleFn: openRemoveDialog,
    },
  ]

  return (
    <Card border radius={2}>
      <Card borderBottom padding={1}>
        <Flex align='center' justify='flex-end' gap={1}>
          <Box display={['none', 'none', 'block']}>
            <Flex
              align='center'
              justify='flex-end'
              gap={1}
              style={{
                transition: 'all .3s',
                opacity: isMenuOpen ? 0 : 1,
                pointerEvents: isMenuOpen ? 'none' : 'all',
              }}
            >
              {hasBeenCustomized && <CustomizedBadge />}
              {actions.map((action) => (
                <Tooltip
                  key={action.label}
                  portal
                  placement='top'
                  content={
                    <Card padding={2}>
                      <Text size={1}>{action.tooltip}</Text>
                    </Card>
                  }
                >
                  <Button
                    mode='bleed'
                    tone='default'
                    icon={action.icon}
                    style={{cursor: 'pointer'}}
                    onClick={action.handleFn}
                    disabled={!sanityUserCanEdit}
                  />
                </Tooltip>
              ))}
            </Flex>
          </Box>
          <MenuButton
            id='menu'
            button={<Button mode='bleed' tone='default' icon={EllipsisHorizontalIcon} />}
            onOpen={() => setIsMenuOpen(true)}
            onClose={() => setIsMenuOpen(false)}
            popover={{placement: 'bottom-end'}}
            menu={
              <Menu padding={0}>
                <IconMenu actions={actions} />
                <Card borderBottom />
                <SvgButtons />
              </Menu>
            }
          />
        </Flex>
      </Card>
      <Flex justify='center' align='center' padding={4}>
        <IconPreview value={sanityValue} width={120} height={120} />
      </Flex>
    </Card>
  )
}
