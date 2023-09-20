import {Box} from '@sanity/ui'
import {ObjectInputProps} from 'sanity'
import useInputSetup from '../../hooks/useInputSetup'
import {useAppStoreContext} from '../../store/context'
import IconManagerPluginOptions from '../../types/IconManagerPluginOptions'
import {IconManagerType} from '../../types/IconManagerType'
import EmptyState from '../AppStates/EmptyState'
import FilledState from '../AppStates/FilledState'
import ChangeIndicatorWrapper from '../ChangeIndicatorWrapper'
import CustomFieldPresence from '../CustomFieldPresence'
import ConfigDialog from '../Dialogs/ConfigDialog'
import InfoDialog from '../Dialogs/InfoDialog'
import RemoveDialog from '../Dialogs/RemoveDialog'
import SearchDialog from '../Dialogs/SearchDialog'

interface IconManagerInputComponentProps {
  objectInputProps: ObjectInputProps<IconManagerType>
  pluginOptions: void | IconManagerPluginOptions
}

const IconManagerInputComponent = ({
  objectInputProps,
  pluginOptions,
}: IconManagerInputComponentProps) => {
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

export default IconManagerInputComponent
