/* eslint-disable react/jsx-no-bind */
import {Flex} from '@sanity/ui'
import useSvgUtils from '../../../hooks/useSvgUtils'
import SvgButtonsBoard from '../../SvgButtonsBoard'

const Footer = () => {
  const {originalDownloadUrl, copyOriginalHtmlToClipboard, copyOriginalDataUrlToClipboard} =
    useSvgUtils()

  return (
    <Flex padding={1} justify='flex-end' gap={3}>
      <SvgButtonsBoard
        downloadUrl={originalDownloadUrl}
        onCopyHtmlToClipboard={copyOriginalHtmlToClipboard}
        onCopyDataUrlToClipboard={copyOriginalDataUrlToClipboard}
      />
    </Flex>
  )
}

export default Footer
