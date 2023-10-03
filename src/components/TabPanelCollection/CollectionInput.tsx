/* eslint-disable react/jsx-no-bind */
import {SearchIcon} from '@sanity/icons'
import {Box, TextInput} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'

interface CollectionInputProps {
  onChange: (searchTerm: string) => void
}

const CollectionInput = ({onChange}: CollectionInputProps) => {
  const handleOnChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value)
    },
    [onChange],
  )
  return (
    <Box margin={4} marginBottom={6}>
      <TextInput
        placeholder='Filter collection...'
        padding={4}
        iconRight={SearchIcon}
        onChange={handleOnChange}
      />
    </Box>
  )
}

export default CollectionInput
