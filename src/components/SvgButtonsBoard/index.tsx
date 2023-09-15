import {Button} from '@sanity/ui'
import DataUrlIcon from '../icons/DataURLIcon'
import DownloadIcon from '../icons/DownloadIcon'
import HtmlIcon from '../icons/HtmlIcon'
import ButtonTooltip from './ButtonTooltip'

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
      <ButtonTooltip tooltipText='Download SVG'>
        <Button as='a' mode='bleed' tone='primary' href={downloadUrl} icon={<DownloadIcon />} />
      </ButtonTooltip>
      <ButtonTooltip tooltipText='Copy svg html to clipboard'>
        <Button
          mode='bleed'
          tone='primary'
          icon={<HtmlIcon width='25px' height='25px' />}
          style={{cursor: 'pointer'}}
          onClick={onCopyHtmlToClipboard}
        />
      </ButtonTooltip>
      <ButtonTooltip tooltipText='Copy svg Data URL to clipboard'>
        <Button
          mode='bleed'
          tone='primary'
          icon={<DataUrlIcon width='25px' height='25px' style={{paddingTop: '6px'}} />}
          style={{cursor: 'pointer'}}
          onClick={onCopyDataUrlToClipboard}
        />
      </ButtonTooltip>
    </>
  )
}

export default SvgButtonsBoard
