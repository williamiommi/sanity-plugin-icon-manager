import {Box, Flex} from '@sanity/ui'
import {useCallback, useState} from 'react'
import {ChangeList, DiffComponent, DiffProps, ObjectDiff} from 'sanity'
import IconifyType from '../../types/IconifyType'
import {StyledBaseButton} from '../shared/SharedStyledComponents'
import IconDiffWrapper from './IconDiffWrapper'

const IconifyFieldDiff: DiffComponent<ObjectDiff<IconifyType>> = function IconifyFieldDiff(
  props: DiffProps<ObjectDiff<IconifyType>>,
) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const onClickDetailsHandler = useCallback(() => {
    setIsDetailsOpen((state) => !state)
  }, [setIsDetailsOpen])

  return (
    <Flex direction='column'>
      <IconDiffWrapper diff={props.diff} />
      <StyledBaseButton
        mode='ghost'
        tone='primary'
        text={`${isDetailsOpen ? 'Hide' : 'Show'} details`}
        onClick={onClickDetailsHandler}
      />
      {isDetailsOpen && (
        <Box marginTop={5}>
          <ChangeList diff={props.diff} schemaType={props.schemaType} />
        </Box>
      )}
    </Flex>
  )
}

export default IconifyFieldDiff
