/* eslint-disable react/jsx-no-bind */
import {Button, Flex} from '@sanity/ui'
import useSvgUtils from '../../../hooks/useSvgUtils'
import DataUrlIcon from '../../icons/DataURLIcon'
import DownloadIcon from '../../icons/DownloadIcon'
import HtmlIcon from '../../icons/HtmlIcon'

const Footer = () => {
  const {onGenerateSvgDownloadUrl, onCopyHtmlToClipboard, onCopyDataUrlToClipboard} = useSvgUtils()
  return (
    <Flex padding={1} justify='flex-end' gap={3}>
      <Button
        as='a'
        mode='bleed'
        tone='primary'
        href={onGenerateSvgDownloadUrl(true)}
        title='Download SVG'
        icon={<DownloadIcon width='15px' height='15px' />}
      />
      <Button
        mode='bleed'
        tone='primary'
        icon={<HtmlIcon width='20px' height='20px' />}
        title='Copy svg html to clipboard'
        style={{cursor: 'pointer'}}
        onClick={() => onCopyHtmlToClipboard(true)}
      />
      <Button
        mode='bleed'
        tone='primary'
        icon={<DataUrlIcon width='21px' height='21px' style={{paddingTop: '6px'}} />}
        title='Copy svg Data URL to clipboard'
        style={{cursor: 'pointer'}}
        onClick={() => onCopyDataUrlToClipboard(true)}
      />
    </Flex>
  )
}

export default Footer
