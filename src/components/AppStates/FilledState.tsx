/* eslint-disable react/jsx-no-bind */
import {EllipsisHorizontalIcon} from '@sanity/icons'
import {Box, Button, Card, Flex, Menu, MenuButton} from '@sanity/ui'
import {useState} from 'react'

import usePluginTranslation from '../../hooks/usePluginTranslation'
import {useAppStoreContext} from '../../store/context'
import BaseTooltip from '../BaseTooltip'
import CustomizedBadge from '../CustomizedBadge'
import IconMenu from '../IconMenu'
import IconPreview from '../IconPreview'
import CogIcon from '../icons/CogIcon'
import DividerIcon from '../icons/DividerIcon'
import JsonIcon from '../icons/JsonIcon'
import TrashIcon from '../icons/TrashIcon'
import SvgButtons from '../SvgButtons'

export default function FilledState() {
  const {t} = usePluginTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const openConfigDialog = useAppStoreContext((s) => s.openConfigDialog)
  const openSearchDialog = useAppStoreContext((s) => s.openSearchDialog)
  const openRemoveDialog = useAppStoreContext((s) => s.openRemoveDialog)
  const openJsonDialog = useAppStoreContext((s) => s.openJsonDialog)
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
                <BaseTooltip key={action.label} portal placement='top' content={action.tooltip}>
                  <Button
                    mode='bleed'
                    tone='default'
                    icon={action.icon}
                    style={{cursor: 'pointer'}}
                    onClick={action.handleFn}
                    disabled={!sanityUserCanEdit}
                  />
                </BaseTooltip>
              ))}
            </Flex>
          </Box>
          <MenuButton
            id='menu'
            button={
              <Button
                mode='bleed'
                tone='default'
                icon={EllipsisHorizontalIcon}
                style={{cursor: 'pointer'}}
              />
            }
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
      <Button
        mode='bleed'
        tone='default'
        icon={<JsonIcon width={22} height={22} />}
        onClick={openJsonDialog}
        style={{position: 'absolute', cursor: 'pointer', right: '3px', bottom: '3px'}}
      />
    </Card>
  )
}
