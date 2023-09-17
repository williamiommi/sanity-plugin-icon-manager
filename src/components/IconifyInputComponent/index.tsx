import {useTheme} from '@sanity/ui'
import {ObjectInputProps} from 'sanity'
import {ThemeProvider} from 'styled-components'
import {AppStoreContextProvider} from '../../store/context'
import IconifyPluginOptions from '../../types/IconifyPluginOptions'
import {IconifyType} from '../../types/IconifyType'
import IconifyInputComponent from './App'

const IconifyInputComponentWrapper = (
  objectInputProps: ObjectInputProps<IconifyType>,
  pluginOptions: void | IconifyPluginOptions,
) => {
  const {sanity: theme} = useTheme()
  return (
    <AppStoreContextProvider>
      <ThemeProvider theme={theme}>
        <IconifyInputComponent objectInputProps={objectInputProps} pluginOptions={pluginOptions} />
      </ThemeProvider>
    </AppStoreContextProvider>
  )
}

export default IconifyInputComponentWrapper
