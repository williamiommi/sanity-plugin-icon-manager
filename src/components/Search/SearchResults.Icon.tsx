import {Icon} from '@iconify-icon/react'
import {Button, Flex} from '@sanity/ui'
import {FormEvent} from 'react'

interface SearchResultsIconProps {
  icon: string
  onClick: (event: FormEvent<HTMLButtonElement>) => void
}

const SearchResultsIcon = ({icon, onClick}: SearchResultsIconProps) => {
  return (
    <Flex
      justify='center'
      as='li'
      key={icon}
      style={{width: 50, height: 50, justifySelf: 'center'}}
    >
      <Button
        key={icon}
        mode='bleed'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        title={icon}
        icon={<Icon icon={icon} width='30' />}
        data-value={icon}
        onClick={onClick}
      />
    </Flex>
  )
}

export default SearchResultsIcon
