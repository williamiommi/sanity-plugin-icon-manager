import {BoltIcon} from '@sanity/icons'
import {Box, Button, Card, Flex, Menu, MenuButton, Text} from '@sanity/ui'
import {ElementType, ReactNode} from 'react'

import usePluginTranslation from '../hooks/usePluginTranslation'
import {useAppStoreContext} from '../store/context'
import {StyledIconMenu} from '../style'
import BaseTooltip from './BaseTooltip'
import IconPreview from './IconPreview'
import TrashIcon from './icons/TrashIcon'
import SvgButtons from './SvgButtons'

interface Props {
  menuIcon: ElementType | ReactNode
  showTrash?: boolean
  onClose?: () => void
  onOpen?: () => void
  actions?: {
    icon: ReactNode
    label: string
    tooltip: string
    handleFn: () => void
    enable?: boolean
  }[]
}

export default function InfoMenu({
  menuIcon,
  showTrash,
  onOpen,
  onClose,
  actions,
}: Props): ReactNode {
  const {t} = usePluginTranslation()
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const openRemoveDialog = useAppStoreContext((s) => s.openRemoveDialog)

  const info = [
    {
      label: t('menu.info.name.label'),
      value: sanityValue?.icon,
    },
    {
      label: t('menu.info.collection.label'),
      value: sanityValue?.metadata.collectionName,
    },
    {
      label: t('menu.info.author.label'),
      value: sanityValue?.metadata.author?.name,
      href: sanityValue?.metadata.author?.url,
    },
    {
      label: t('menu.info.license.label'),
      value: sanityValue?.metadata.license?.name,
      href: sanityValue?.metadata.license?.url,
    },
  ]

  return (
    <MenuButton
      id='menu'
      button={<Button mode='bleed' tone='default' icon={menuIcon} style={{cursor: 'pointer'}} />}
      onOpen={onOpen}
      onClose={onClose}
      popover={{placement: 'bottom-end'}}
      menu={
        <Menu padding={0}>
          <StyledIconMenu>
            <Flex
              direction={['column', 'column', 'row']}
              align='flex-start'
              paddingX={2}
              paddingY={3}
              marginBottom={[3, 3, 0]}
              style={{width: '100%'}}
            >
              <Box flex={[2]} style={{width: '100%'}}>
                <Flex align='center' justify='space-between' gap={1}>
                  <Flex align='center' gap={1}>
                    <IconPreview value={sanityValue} width={20} height={20} hideText />
                    <Text muted weight='semibold'>
                      {t('menu.info.title')}
                    </Text>
                  </Flex>
                  {showTrash && (
                    <BaseTooltip portal placement='top' content={t('remove.icon.tooltip')}>
                      <Button
                        mode='bleed'
                        padding={2}
                        paddingTop={3}
                        fontSize={1}
                        style={{cursor: 'pointer'}}
                        justify='flex-start'
                        icon={<TrashIcon width={20} height={20} />}
                        onClick={openRemoveDialog}
                      />
                    </BaseTooltip>
                  )}
                </Flex>
                <Card tone='primary' paddingY={4} paddingX={2} marginTop={1} sizing='border'>
                  <Flex direction='column' gap={3}>
                    {info.map((item) => (
                      <Flex
                        key={item.label}
                        direction={['column', 'column', 'row']}
                        gap={[2, 2, 1]}
                      >
                        <Text muted size={1}>
                          {item.label}
                        </Text>
                        <Text
                          size={1}
                          weight='semibold'
                          textOverflow='ellipsis'
                          style={{width: '85%'}}
                        >
                          {item.href && (
                            <a href={item.href} target='_blank' title={item.value} rel='noreferrer'>
                              {item.value}
                            </a>
                          )}
                          {!item.href && <>{item.value}</>}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                </Card>
              </Box>
              {actions && (
                <Box flex={1}>
                  <Flex align='center' gap={1}>
                    <BoltIcon width={20} height={20} />
                    <Text muted weight='semibold'>
                      {t('menu.actions.title')}
                    </Text>
                  </Flex>
                  <Card paddingX={2} sizing='border' marginTop={3}>
                    <Flex direction='column' align='center' justify='center'>
                      {actions.map((action) => {
                        if (!action.enable) return null
                        return (
                          <Button
                            key={action.label}
                            mode='bleed'
                            padding={2}
                            paddingY={3}
                            fontSize={1}
                            style={{width: '100%', cursor: 'pointer'}}
                            onClick={action.handleFn}
                            icon={action.icon}
                            text={action.label}
                            justify='flex-start'
                          />
                        )
                      })}
                    </Flex>
                  </Card>
                </Box>
              )}
            </Flex>
          </StyledIconMenu>
          <Card borderBottom />
          <SvgButtons />
        </Menu>
      }
    />
  )
}
