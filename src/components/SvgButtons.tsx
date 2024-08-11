import {Button, Flex} from '@sanity/ui'
import {ReactElement} from 'react'

import usePluginTranslation from '../hooks/usePluginTranslation'
import useSvgUtils from '../hooks/useSvgUtils'
import {useAppStoreContext} from '../store/context'
import BaseTooltip from './BaseTooltip'
import Base64Icon from './icons/Base64Icon'
import DownloadIcon from './icons/DownloadIcon'
import PngIcon from './icons/PngIcon'
import SvgIcon from './icons/SvgIcon'

export default function SvgButtons(): ReactElement {
  const {t} = usePluginTranslation()
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const {urls, copyHtmlToClipboard, copyDataUrlToClipboard, downloadPng} = useSvgUtils({
    icon: sanityValue?.icon!,
    size: sanityValue?.metadata.size!,
    hFlip: sanityValue?.metadata.hFlip,
    vFlip: sanityValue?.metadata.vFlip,
    flip: sanityValue?.metadata.flip,
    rotate: sanityValue?.metadata.rotate,
    color: sanityValue?.metadata.color,
  })

  const actions = [
    {
      tooltip: t('download.svg.tooltip'),
      icon: <DownloadIcon width={20} height={20} />,
      href: urls?.downloadUrl,
    },
    {
      tooltip: t('copy.svg.to.clipboard.tooltip'),
      icon: <SvgIcon width={22} height={22} />,
      onClick: copyHtmlToClipboard,
    },
    {
      tooltip: t('copy.b64.to.clipboard.tooltip'),
      icon: <Base64Icon width={25} height={18} />,
      onClick: copyDataUrlToClipboard,
    },
    {
      tooltip: t('download.png.tooltip'),
      icon: <PngIcon width={22} height={22} />,
      onClick: downloadPng,
    },
  ]

  return (
    <Flex justify='center' align='center' paddingTop={2} paddingBottom={1}>
      {actions.map((action) => (
        <BaseTooltip key={action.tooltip} portal placement='top' content={action.tooltip}>
          <Button
            {...(action.href && {as: 'a'})}
            mode='bleed'
            tone='default'
            icon={action.icon}
            style={{cursor: 'pointer'}}
            {...(action.onClick && {onClick: action.onClick})}
            {...(action.href && {href: action.href})}
          />
        </BaseTooltip>
      ))}
    </Flex>
  )
}
