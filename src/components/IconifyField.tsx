import {BookIcon} from '@sanity/icons'
import {Box, Button, Flex, useTheme} from '@sanity/ui'
import {ObjectFieldProps} from 'sanity'
import {ThemeProvider} from 'styled-components'
import useSetup from '../hooks/useSetup'
import {useAppStore} from '../store'
import ChangeIndicatorWrapper from './ChangeIndicatorWrapper'
import RemoveDialog from './RemoveDialog'
import SearchDialog from './SearchDialog'
import SelectedIcon from './SelectedIcon'

type IconifyFieldProps = ObjectFieldProps & {}

const IconifyField = (props: IconifyFieldProps) => {
  useSetup(props)
  const {sanity: theme} = useTheme()
  const openSearchDialog = useAppStore((s) => s.openSearchDialog)

  return (
    <div>
      {props.renderDefault({...props, children: undefined})}
      {!props.collapsed && (
        <ThemeProvider theme={theme}>
          <Box style={{position: 'relative'}}>
            <SelectedIcon />
            <Flex
              gap={3}
              paddingTop={props.value ? 1 : 0}
              marginTop={props.value ? 2 : 0}
              style={{
                borderTop: `${props.value ? 1 : 0}px solid ${theme.color.card.enabled.border}`,
              }}
            >
              <Button
                text={`${props.value ? 'Change' : 'Select'} icon`}
                mode={props.value ? 'bleed' : 'default'}
                tone='primary'
                icon={<BookIcon width={18} />}
                fontSize={1}
                style={{cursor: 'pointer', transition: 'all .3s ease-in-out'}}
                onClick={openSearchDialog}
              />
              <RemoveDialog />
            </Flex>
            <SearchDialog />
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
