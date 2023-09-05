import {Flex} from '@sanity/ui'
import {DiffComponent, DiffProps, ObjectDiff} from 'sanity'
import {IconifyType} from '../../types/IconifyType'
import IconDiffChangeList from './IconDiffChangeList'
import IconDiffWrapper from './IconDiffWrapper'

const IconifyFieldDiff: DiffComponent<ObjectDiff<IconifyType>> = function IconifyFieldDiff(
  props: DiffProps<ObjectDiff<IconifyType>>,
) {
  return (
    <Flex direction='column'>
      <IconDiffWrapper {...props} />
      <IconDiffChangeList {...props} />
    </Flex>
  )
}

export default IconifyFieldDiff
