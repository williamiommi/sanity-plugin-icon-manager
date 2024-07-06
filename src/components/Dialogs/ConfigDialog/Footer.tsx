import {Button, Flex} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'

const Footer = () => {
  const clearConfiguration = useAppStoreContext((s) => s.clearConfiguration)
  const saveConfiguration = useAppStoreContext((s) => s.saveConfiguration)

  return (
    <Flex
      direction={['column', 'column', 'column', 'row']}
      margin={2}
      align={'center'}
      justify='flex-end'
      gap={2}
    >
      <Flex align='center' gap={2}>
        <Button
          text='Clear'
          title='Clear Configuration'
          mode='bleed'
          tone='critical'
          fontSize={2}
          style={{cursor: 'pointer'}}
          onClick={clearConfiguration}
        />
        <Button
          text='Save'
          title='Save Configuration'
          mode='bleed'
          tone='positive'
          fontSize={2}
          style={{cursor: 'pointer'}}
          onClick={saveConfiguration}
        />
      </Flex>
    </Flex>
  )
}

export default Footer
