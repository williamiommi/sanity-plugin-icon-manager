import {Box, Button} from '@sanity/ui'
import {useCallback, useState} from 'react'
import {ChangeList, DiffProps, ObjectDiff} from 'sanity'
import usePluginTranslation from '../../hooks/usePluginTranslation'
import {IconManagerType} from '../../types/IconManagerType'

const IconDiffChangeList = (props: DiffProps<ObjectDiff<IconManagerType>>) => {
  const {t} = usePluginTranslation()
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const onClickDetailsHandler = useCallback(() => {
    setIsDetailsOpen((state) => !state)
  }, [setIsDetailsOpen])

  if (!props.diff.isChanged || (!props.diff.fromValue?.icon && !props.diff.toValue?.icon))
    return null

  return (
    <>
      <Button
        mode='ghost'
        tone='primary'
        text={t(`diff.changes.${isDetailsOpen ? 'hide' : 'show'}.details.cta`)}
        onClick={onClickDetailsHandler}
        style={{cursor: 'pointer'}}
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
