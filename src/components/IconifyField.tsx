import {BookIcon} from '@sanity/icons'
import {Box, Flex, useTheme} from '@sanity/ui'
import {ObjectFieldProps} from 'sanity'
import {ThemeProvider} from 'styled-components'
import useSetup from '../hooks/useSetup'
import {useAppStore} from '../store'
import IconifyPluginOptions from '../types/IconifyPluginOptions'
import ChangeIndicatorWrapper from './ChangeIndicatorWrapper'
import CustomFieldPresence from './CustomFieldPresence'
import RemoveDialog from './RemoveDialog'
import SearchDialog from './SearchDialog'
import SelectedIcon from './SelectedIcon'
import {StyledBaseButton} from './shared/SharedStyledComponents'

const IconifyField = (props: ObjectFieldProps, pluginOptions: IconifyPluginOptions) => {
  useSetup(props, pluginOptions)
  const {sanity: theme} = useTheme()
  const openSearchDialog = useAppStore((s) => s.openSearchDialog)
  const sanityUserCanEdit = useAppStore((s) => s.sanityUserCanEdit)
  return (
    <div>
      {props.renderDefault({...props, children: undefined})}
      {!props.collapsed && (
        <ThemeProvider theme={theme}>
          <Box style={{position: 'relative'}}>
            <Flex justify='space-between' gap={1}>
              {props.value && <SelectedIcon />}
              <CustomFieldPresence objectFieldProps={props} />
            </Flex>
            {sanityUserCanEdit && (
              <>
                <Flex
                  gap={3}
                  paddingTop={props.value ? 1 : 0}
                  marginTop={props.value ? 2 : 0}
                  style={{
                    borderTop: `${props.value ? 1 : 0}px solid ${theme.color.card.enabled.border}`,
                  }}
                >
                  <StyledBaseButton
                    text={`${props.value ? 'Change' : 'Select'} icon`}
                    mode={props.value ? 'bleed' : 'default'}
                    tone='primary'
                    icon={<BookIcon width={18} />}
                    fontSize={1}
                    onClick={openSearchDialog}
                  />
                  <RemoveDialog />
                </Flex>
                <SearchDialog />
              </>
            )}
            <ChangeIndicatorWrapper
              path={props.path}
              isChanged={props.changed}
              hasFocus={!!props.inputProps.focused}
              withHoverEffect
            />
          </Box>
        </ThemeProvider>
      )}
    </div>
  )
}

export default IconifyField
