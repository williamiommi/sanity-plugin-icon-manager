import {useTheme} from '@sanity/ui'
import {ObjectInputProps} from 'sanity'
import {ThemeProvider} from 'styled-components'
import {AppStoreContextProvider} from '../../store/context'
import IconManagerPluginOptions from '../../types/IconManagerPluginOptions'
import {IconManagerType} from '../../types/IconManagerType'
import IconManagerInputComponent from './App'

const IconManagerInputComponentWrapper = (
  objectInputProps: ObjectInputProps<IconManagerType>,
  pluginOptions: void | IconManagerPluginOptions,
) => {
  const {sanity: theme} = useTheme()
  return (
    <AppStoreContextProvider>
      <ThemeProvider theme={theme}>
        <IconManagerInputComponent
          objectInputProps={objectInputProps}
          pluginOptions={pluginOptions}
        />
      </ThemeProvider>
    </AppStoreContextProvider>
  )
}

export default IconManagerInputComponentWrapper
