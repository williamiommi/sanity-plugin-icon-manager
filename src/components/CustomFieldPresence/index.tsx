import {Flex} from '@sanity/ui'
import {ReactNode} from 'react'
import {FieldMember, FieldPresenceWithOverlay, ObjectInputProps} from 'sanity'

import {useAppStoreContext} from '../../store/context'

interface CustomFieldPresenceProps {
  objectInputProps: ObjectInputProps
}

export default function CustomFieldPresence({
  objectInputProps,
}: CustomFieldPresenceProps): ReactNode {
  const sanityFieldPath = useAppStoreContext((s) => s.sanityFieldPath)
  const members = objectInputProps.members as FieldMember[]

  if (
    (Array.isArray(members) && members.length === 0 && !members[0].field && !sanityFieldPath) ||
    members[0].field.presence.length === 0
  )
    return null

  return (
    <Flex justify='flex-end'>
      <FieldPresenceWithOverlay presence={members[0].field.presence} maxAvatars={7} />
    </Flex>
  )
}
