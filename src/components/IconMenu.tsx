import {LaunchIcon} from '@sanity/icons'
import {Button, Flex, Text, useMediaIndex} from '@sanity/ui'
import {ReactNode} from 'react'
import usePluginTranslation from '../hooks/usePluginTranslation'
import {useAppStoreContext} from '../store/context'
import CustomizedBadge from './CustomizedBadge'
import {
  StyledActionsTitleWrapper,
  StyledActionsWrapper,
  StyledInfoCard,
  StyledInfoLabel,
  StyledInfoTitleWrapper,
  StyledInfoValue,
  StyledInfoWrapper,
  StyledWrapper,
} from './IconMenu.style'
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
  const mediaindex = useMediaIndex()
  const isMobile = mediaindex < 2

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
    <StyledWrapper
      padding={2}
      $isMobile={isMobile}
      wrap='wrap'
      direction={['column', 'column', 'row']}
    >
      <StyledInfoTitleWrapper $isMobile={isMobile}>
        <IconPreview value={sanityValue} width={20} height={20} hideText />
        <Text muted weight='semibold'>
          {t('menu.info.title')}
        </Text>
        {hasBeenCustomized && <CustomizedBadge />}
      </StyledInfoTitleWrapper>
      <StyledActionsTitleWrapper $isMobile={isMobile}>
        <Text muted weight='semibold'>
          {t('menu.actions.title')}
        </Text>
      </StyledActionsTitleWrapper>
      <StyledInfoWrapper $isMobile={isMobile}>
        <StyledInfoCard
          $isMobile={isMobile}
          tone='primary'
          paddingY={4}
          paddingX={2}
          sizing='border'
        >
          <Flex direction='column' gap={3}>
            {info.map((item) => (
              <Flex key={item.label} direction={['column', 'column', 'row']} gap={[2, 2, 1]}>
                <StyledInfoLabel muted size={1}>
                  {item.label}
                </StyledInfoLabel>
                <StyledInfoValue
                  $isMobile={isMobile}
                  size={1}
                  weight='semibold'
                  textOverflow='ellipsis'
                >
                  {item.href && (
                    <>
                      <a href={item.href} target='_blank' title={item.value} rel='noreferrer'>
                        {item.value}
                      </a>
                      <LaunchIcon width={14} style={{marginLeft: '5px'}} />
                    </>
                  )}
                  {!item.href && <>{item.value}</>}
                </StyledInfoValue>
              </Flex>
            ))}
          </Flex>
        </StyledInfoCard>
      </StyledInfoWrapper>
      <StyledActionsWrapper $isMobile={isMobile}>
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
      </StyledActionsWrapper>
    </StyledWrapper>
  )
}
