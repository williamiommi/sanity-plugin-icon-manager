import {Box} from '@sanity/ui'
import {useCallback, useState} from 'react'
import {ChangeList, DiffProps, ObjectDiff} from 'sanity'
import {IconifyType} from '../../types/IconifyType'
import {StyledBaseButton} from '../shared/SharedStyledComponents'

const IconDiffChangeList = (props: DiffProps<ObjectDiff<IconifyType>>) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const onClickDetailsHandler = useCallback(() => {
    setIsDetailsOpen((state) => !state)
  }, [setIsDetailsOpen])

  if (!props.diff.fromValue?.icon && !props.diff.toValue?.icon) return null

  return (
    <>
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
    </>
  )
}

export default IconDiffChangeList
