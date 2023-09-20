import {Box} from '@sanity/ui'
import {ObjectInputProps} from 'sanity'
import useInputSetup from '../../hooks/useInputSetup'
import {useAppStoreContext} from '../../store/context'
import IconifyPluginOptions from '../../types/IconifyPluginOptions'
import {IconifyType} from '../../types/IconifyType'
import EmptyState from '../AppStates/EmptyState'
import FilledState from '../AppStates/FilledState'
import ChangeIndicatorWrapper from '../ChangeIndicatorWrapper'
import CustomFieldPresence from '../CustomFieldPresence'
import ConfigDialog from '../Dialogs/ConfigDialog'
import InfoDialog from '../Dialogs/InfoDialog'
import RemoveDialog from '../Dialogs/RemoveDialog'
import SearchDialog from '../Dialogs/SearchDialog'

interface IconifyInputComponentProps {
  objectInputProps: ObjectInputProps<IconifyType>
  pluginOptions: void | IconifyPluginOptions
}

const IconifyInputComponent = ({objectInputProps, pluginOptions}: IconifyInputComponentProps) => {
  useInputSetup(objectInputProps, pluginOptions)
  const sanityValue = useAppStoreContext((s) => s.sanityValue)

  return (
    <Box style={{position: 'relative'}}>
      <CustomFieldPresence objectInputProps={objectInputProps} />

      {/* App States */}
      <EmptyState />
      <FilledState />

      {/* Dialogs */}
      {sanityValue?.icon && (
        <>
          <InfoDialog />
          <ConfigDialog />
          <RemoveDialog />
        </>
      )}
      <SearchDialog />

      <ChangeIndicatorWrapper
        path={objectInputProps.path}
        isChanged={objectInputProps.changed}
        hasFocus={!!objectInputProps.focused}
        withHoverEffect
      />
    </Box>
  )
}

export default IconifyInputComponent
