import {Flex} from '@sanity/ui'
import {FieldMember, FieldPresenceWithoutOverlay, ObjectFieldProps} from 'sanity'
import {useAppStore} from '../../store'

interface CustomFieldPresenceProps {
  objectFieldProps: ObjectFieldProps
}

const CustomFieldPresence = ({objectFieldProps}: CustomFieldPresenceProps) => {
  const sanityFieldPath = useAppStore((s) => s.sanityFieldPath)
  const members = objectFieldProps.inputProps.members as FieldMember[]
  if (Array.isArray(members) && members.length === 0 && !members[0].field && !sanityFieldPath)
    return null
  return (
    <Flex justify='flex-end'>
      <FieldPresenceWithoutOverlay presence={members[0].field.presence} maxAvatars={7} />
    </Flex>
  )
}

export default CustomFieldPresence
