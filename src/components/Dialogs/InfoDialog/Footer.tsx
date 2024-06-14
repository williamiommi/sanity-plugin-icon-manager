/* eslint-disable react/jsx-no-bind */
import {Flex} from '@sanity/ui'
import useSvgUtils from '../../../hooks/useSvgUtils'
import SvgButtonsBoard from '../../SvgButtonsBoard'

const Footer = () => {
  const {urls, copyHtmlToClipboard, copyDataUrlToClipboard} = useSvgUtils(true)

  return (
    <Flex padding={1} justify='flex-end' gap={3}>
      <SvgButtonsBoard
        downloadUrl={urls?.downloadUrl!}
        onCopyHtmlToClipboard={copyHtmlToClipboard}
        onCopyDataUrlToClipboard={copyDataUrlToClipboard}
      />
    </Flex>
  )
}

export default Footer
