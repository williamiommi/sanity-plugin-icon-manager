import {BookIcon} from '@sanity/icons'
import {Button, Flex, useTheme} from '@sanity/ui'
import {ObjectFieldProps} from 'sanity'
import useSetup from '../hooks/useSetup'
import {useAppStore} from '../store'
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
        <>
          <SelectedIcon />
          <Flex
            gap={3}
            paddingTop={props.value ? 1 : 0}
            marginTop={props.value ? 2 : 0}
            style={{borderTop: `${props.value ? 1 : 0}px solid ${theme.color.card.enabled.border}`}}
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
        </>
      )}
    </div>
  )
}

export default IconifyField
