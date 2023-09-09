import {Box} from '@sanity/ui'
import {ObjectInputProps} from 'sanity'
import useInputSetup from '../../hooks/useInputSetup'
import IconifyPluginOptions from '../../types/IconifyPluginOptions'
import {IconifyType} from '../../types/IconifyType'
import ChangeIndicatorWrapper from '../ChangeIndicatorWrapper'
import CustomFieldPresence from '../CustomFieldPresence'
import ConfigDialog from '../Dialogs/ConfigDialog'
import InfoDialog from '../Dialogs/InfoDialog'
import RemoveDialog from '../Dialogs/RemoveDialog'
import SearchDialog from '../Dialogs/SearchDialog'
import EmptyIconState from '../EmptyIconState'
import FullIconState from '../FullIconState'

interface IconifyInputComponentProps {
  objectInputProps: ObjectInputProps<IconifyType>
  pluginOptions: IconifyPluginOptions
}

const IconifyInputComponent = ({objectInputProps, pluginOptions}: IconifyInputComponentProps) => {
  useInputSetup(objectInputProps, pluginOptions)

  return (
    <Box style={{position: 'relative'}}>
      <CustomFieldPresence objectInputProps={objectInputProps} />
      <EmptyIconState />
      <FullIconState />
      <ChangeIndicatorWrapper
        path={objectInputProps.path}
        isChanged={objectInputProps.changed}
        hasFocus={!!objectInputProps.focused}
        withHoverEffect
      />

      {/* Dialogs */}
      <InfoDialog />
      <ConfigDialog />
      <SearchDialog />
      <RemoveDialog />
    </Box>
  )
}

export default IconifyInputComponent
