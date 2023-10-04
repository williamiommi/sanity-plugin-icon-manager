/* eslint-disable react/jsx-no-bind */
import {SearchIcon} from '@sanity/icons'
import {Box, TextInput} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'

interface InputProps {
  placeholder: string
  term?: string
  onChange: (searchTerm: string) => void
}

const Input = ({placeholder, term, onChange}: InputProps) => {
  const handleOnChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value)
    },
    [onChange],
  )
  return (
    <Box margin={4}>
      <TextInput
        placeholder={placeholder}
        padding={4}
        iconRight={SearchIcon}
        onChange={handleOnChange}
        value={term}
      />
    </Box>
  )
}

export default Input
