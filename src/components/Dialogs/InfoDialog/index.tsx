/* eslint-disable react/jsx-no-bind */
import {Dialog, Flex} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'
import Footer from './Footer'
import Header from './Header'
import Row from './Row'

const InfoDialog = () => {
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const isInfoDialogOpen = useAppStoreContext((s) => s.isInfoDialogOpen)
  const closeInfoDialog = useAppStoreContext((s) => s.closeInfoDialog)

  if (!isInfoDialogOpen || !sanityValue?.icon) return null

  return (
    <Dialog
      id='info-dialog'
      header={<Header />}
      footer={<Footer />}
      onClose={closeInfoDialog}
      width={0}
    >
      <Flex direction='column' margin={4} gap={3}>
        <Row heading='Name:' value={sanityValue?.metadata?.iconName} />
        <Row heading='Collection:' value={sanityValue?.metadata?.collectionName} />
        <Row
          heading='Author:'
          href={sanityValue?.metadata?.author?.url}
          value={sanityValue?.metadata?.author?.name}
        />
        <Row
          heading='Author:'
          href={sanityValue?.metadata?.license?.url}
          value={sanityValue?.metadata?.license?.name}
        />
      </Flex>
    </Dialog>
  )
}

export default InfoDialog
