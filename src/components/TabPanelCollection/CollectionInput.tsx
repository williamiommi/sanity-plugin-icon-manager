/* eslint-disable react/jsx-no-bind */
import {SearchIcon} from '@sanity/icons'
import {Box, TextInput} from '@sanity/ui'
import {FormEvent} from 'react'

interface CollectionInputProps {
  onInput: (e: FormEvent<HTMLInputElement>) => void
}

const CollectionInput = ({onInput}: CollectionInputProps) => {
  return (
    <Box margin={4}>
      <TextInput
        placeholder='Filter collection...'
        padding={4}
        iconRight={SearchIcon}
        onChange={onInput}
      />
    </Box>
  )
}

export default CollectionInput
