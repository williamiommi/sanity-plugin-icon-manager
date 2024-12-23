import {Box} from '@sanity/ui'
import {ReactNode} from 'react'
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
import JsonDialog from '../Dialogs/JsonDialog'
import RemoveDialog from '../Dialogs/RemoveDialog'
import SearchDialog from '../Dialogs/SearchDialog'
import SimpleUI from '../SimpleUI'

interface IconManagerInputComponentProps {
  objectInputProps: ObjectInputProps<IconManagerType>
  pluginOptions: void | IconManagerPluginOptions
}

export default function IconManagerInputComponent({
  objectInputProps,
  pluginOptions,
}: IconManagerInputComponentProps): ReactNode {
  useInputSetup(objectInputProps, pluginOptions)
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const userCan = useAppStoreContext((s) => s.userCan)

  return (
    <Box style={{position: 'relative'}}>
      <CustomFieldPresence objectInputProps={objectInputProps} />

      {userCan.viewSimpleUI ? (
        <SimpleUI />
      ) : (
        <>
          {/* App States */}
          <EmptyState />
          <FilledState />
        </>
      )}

      {/* Dialogs */}
      {sanityValue?.icon && (
        <>
          <ConfigDialog />
          <RemoveDialog />
          <JsonDialog />
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
