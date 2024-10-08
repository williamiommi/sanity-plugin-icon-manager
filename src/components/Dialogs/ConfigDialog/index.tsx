/* eslint-disable react/jsx-no-bind */
import {Card, Dialog, Flex} from '@sanity/ui'
import {ReactNode} from 'react'

import {useAppStoreContext} from '../../../store/context'
import Color from './Color'
import Flip from './Flip'
import Footer from './Footer'
import Header from './Header'
import InlineSvg from './InlineSvg'
import Preview from './Preview'
import Rotate from './Rotate'
import Size from './Size'

export default function ConfigDialog(): ReactNode {
  const isConfigDialogOpen = useAppStoreContext((s) => s.isConfigDialogOpen)
  const closeConfigDialog = useAppStoreContext((s) => s.closeConfigDialog)

  if (!isConfigDialogOpen) return null

  return (
    <Dialog
      id='config-dialog'
      header={<Header />}
      footer={<Footer />}
      onClose={closeConfigDialog}
      width={1}
    >
      <Card marginY={4} marginX={[4, 4, 6, 7]}>
        <Flex direction='column' gap={4}>
          <Flip />
          <Rotate />
          <Size />
          <Color />
          <InlineSvg />
        </Flex>
        <Preview />
      </Card>
    </Dialog>
  )
}
