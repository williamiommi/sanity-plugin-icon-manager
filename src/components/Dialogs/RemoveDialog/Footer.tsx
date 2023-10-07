import {Button, Flex} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'

const Footer = () => {
  const closeRemoveDialog = useAppStoreContext((s) => s.closeRemoveDialog)
  const removeIcon = useAppStoreContext((s) => s.removeIcon)

  return (
    <Flex gap={2} justify='flex-end' margin={2}>
      <Button
        text='Cancel'
        mode='bleed'
        tone='critical'
        fontSize={2}
        style={{cursor: 'pointer'}}
        onClick={closeRemoveDialog}
      />
      <Button
        text='Confirm'
        mode='bleed'
        tone='positive'
        fontSize={2}
        style={{cursor: 'pointer'}}
        onClick={removeIcon}
      />
    </Flex>
  )
}

export default Footer
