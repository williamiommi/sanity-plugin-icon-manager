import {Button, Flex} from '@sanity/ui'
import {FormEvent} from 'react'
import IconPreview from '../IconPreview'

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
        title={icon}
        icon={<IconPreview icon={icon} width='30' height='30' />}
        data-value={icon}
        onClick={onClick}
        style={{cursor: 'pointer'}}
      />
    </Flex>
  )
}

export default SearchResultsIcon
