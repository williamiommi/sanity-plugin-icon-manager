import {Flex} from '@sanity/ui'
import {DiffComponent, DiffProps, ObjectDiff} from 'sanity'
import {IconManagerType} from '../../types/IconManagerType'
import IconDiffChangeList from './IconDiffChangeList'
import IconDiffWrapper from './IconDiffWrapper'

const IconManagerFieldDiff: DiffComponent<ObjectDiff<IconManagerType>> =
  function IconManagerFieldDiff(props: DiffProps<ObjectDiff<IconManagerType>>) {
    return (
      <Flex direction='column'>
        <IconDiffWrapper {...props} />
        <IconDiffChangeList {...props} />
      </Flex>
    )
  }

export default IconManagerFieldDiff
