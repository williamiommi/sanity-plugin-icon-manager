import {Button} from '@sanity/ui'
import DataUrlIcon from '../icons/DataURLIcon'
import DownloadIcon from '../icons/DownloadIcon'
import HtmlIcon from '../icons/HtmlIcon'

interface SvgButtonsBoardProps {
  downloadUrl: string
  onCopyHtmlToClipboard: () => void
  onCopyDataUrlToClipboard: () => void
}

const SvgButtonsBoard = ({
  downloadUrl,
  onCopyHtmlToClipboard,
  onCopyDataUrlToClipboard,
}: SvgButtonsBoardProps) => {
  return (
    <>
      <Button
        as='a'
        mode='bleed'
        tone='primary'
        href={downloadUrl}
        title='Download SVG'
        icon={<DownloadIcon />}
      />
      <Button
        mode='bleed'
        tone='primary'
        icon={<HtmlIcon width='25px' height='25px' />}
        title='Copy svg html to clipboard'
        style={{cursor: 'pointer'}}
        onClick={onCopyHtmlToClipboard}
      />
      <Button
        mode='bleed'
        tone='primary'
        icon={<DataUrlIcon width='25px' height='25px' style={{paddingTop: '6px'}} />}
        title='Copy svg Data URL to clipboard'
        style={{cursor: 'pointer'}}
        onClick={onCopyDataUrlToClipboard}
      />
    </>
  )
}

export default SvgButtonsBoard
