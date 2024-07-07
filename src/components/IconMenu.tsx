import {LaunchIcon} from '@sanity/icons'
import {Button, Flex, Text} from '@sanity/ui'
import {ReactNode} from 'react'
import usePluginTranslation from '../hooks/usePluginTranslation'
import {useAppStoreContext} from '../store/context'
import {
  StyledIconMenu,
  StyledIconMenuActionsTitleWrapper,
  StyledIconMenuActionsWrapper,
  StyledIconMenuInfoCard,
  StyledIconMenuInfoTitleWrapper,
  StyledIconMenuInfoValue,
  StyledIconMenuInfoWrapper,
} from '../style'
import CustomizedBadge from './CustomizedBadge'
import IconPreview from './IconPreview'

interface Props {
  actions: {
    icon: ReactNode
    label: string
    tooltip: string
    handleFn: () => void
  }[]
}

export default function IconMenu({actions}: Props) {
  const {t} = usePluginTranslation()
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const hasBeenCustomized = useAppStoreContext((s) => s.hasBeenCustomized())

  const info = [
    {
      label: t('menu.info.name.label'),
      value: sanityValue!.icon,
    },
    {
      label: t('menu.info.collection.label'),
      value: sanityValue!.metadata.collectionName,
    },
    {
      label: t('menu.info.author.label'),
      value: sanityValue!.metadata.author?.name,
      href: sanityValue!.metadata.author?.url,
    },
    {
      label: t('menu.info.license.label'),
      value: sanityValue!.metadata.license?.name,
      href: sanityValue!.metadata.license?.url,
    },
  ]

  return (
    <StyledIconMenu padding={2} wrap='wrap' direction={['column', 'column', 'row']}>
      <StyledIconMenuInfoTitleWrapper align='center' gap={1}>
        <IconPreview value={sanityValue} width={20} height={20} hideText />
        <Text muted weight='semibold'>
          {t('menu.info.title')}
        </Text>
        {hasBeenCustomized && <CustomizedBadge />}
      </StyledIconMenuInfoTitleWrapper>
      <StyledIconMenuActionsTitleWrapper align='center'>
        <Text muted weight='semibold'>
          {t('menu.actions.title')}
        </Text>
      </StyledIconMenuActionsTitleWrapper>
      <StyledIconMenuInfoWrapper align='center' marginTop={2} marginBottom={[2, 2, 0]}>
        <StyledIconMenuInfoCard tone='primary' paddingY={4} paddingX={2} sizing='border'>
          <Flex direction='column' gap={3}>
            {info.map((item) => (
              <Flex key={item.label} direction={['column', 'column', 'row']} gap={[2, 2, 1]}>
                <Text muted size={1}>
                  {item.label}
                </Text>
                <StyledIconMenuInfoValue size={1} weight='semibold' textOverflow='ellipsis'>
                  {item.href && (
                    <>
                      <a href={item.href} target='_blank' title={item.value} rel='noreferrer'>
                        {item.value}
                      </a>
                      <LaunchIcon width={14} style={{marginLeft: '5px'}} />
                    </>
                  )}
                  {!item.href && <>{item.value}</>}
                </StyledIconMenuInfoValue>
              </Flex>
            ))}
          </Flex>
        </StyledIconMenuInfoCard>
      </StyledIconMenuInfoWrapper>
      <StyledIconMenuActionsWrapper
        direction='column'
        justify='center'
        marginTop={2}
        marginBottom={[2, 2, 0]}
      >
        {actions.map((action) => (
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
        ))}
      </StyledIconMenuActionsWrapper>
    </StyledIconMenu>
  )
}
