/* eslint-disable react/jsx-no-bind */
import {Card, TextInput, useTheme} from '@sanity/ui'
import {FormEvent, useEffect, useState} from 'react'

import {FALLBACK_SIZE} from '../lib/constants'
import {keepAspectRatioCalculator} from '../lib/svg-utils'
import {IconManagerSize} from '../types/IconManagerType'
import HeightIcon from './icons/HeightIcon'
import WidthIcon from './icons/WidthIcon'

interface Props {
  initialSize: IconManagerSize
  keepAspectRatio: boolean
  updateSize: (size: IconManagerSize) => void
}

export default function InputSize({initialSize, keepAspectRatio, updateSize}: Props) {
  const {sanity: theme} = useTheme()
  const [lockedSize, setLockedSize] = useState<IconManagerSize>()
  const getDefaultSize = (value: number, type: 'width' | 'height') => {
    const valueToStore = Number.isNaN(value) ? 0 : value
    let defaultSize = {...initialSize, [type]: valueToStore}

    if (keepAspectRatio && lockedSize) {
      defaultSize = keepAspectRatioCalculator(
        lockedSize.width,
        lockedSize.height,
        type === 'width' ? valueToStore : undefined,
        type === 'height' ? valueToStore : undefined,
      )
    }

    return defaultSize
  }

  const handleOnBlur = ({currentTarget}: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (isNaN(parseInt(currentTarget.value, 10)) || currentTarget.value == '0') {
      const defaultSize = getDefaultSize(
        FALLBACK_SIZE,
        currentTarget.dataset.type as 'width' | 'height',
      )
      updateSize(defaultSize)
    }
  }

  const handleOnChange = ({currentTarget}: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const size = getDefaultSize(
      parseInt(currentTarget.value, 10),
      currentTarget.dataset.type as 'width' | 'height',
    )
    updateSize(size)
  }

  useEffect(() => {
    if (keepAspectRatio && !lockedSize) setLockedSize(initialSize)
    if (!keepAspectRatio) setLockedSize(undefined)
  }, [keepAspectRatio, lockedSize, initialSize])

  return (
    <>
      <Card flex={1}>
        <TextInput
          type='number'
          data-type='width'
          min={0}
          fontSize={1}
          padding={2}
          space={3}
          style={{paddingLeft: '22px', paddingRight: '2px'}}
          icon={<WidthIcon width={15} color={theme.color.button.ghost.primary.enabled.fg} />}
          value={`${initialSize.width}`}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
        />
      </Card>
      <Card flex={1}>
        <TextInput
          type='number'
          data-type='height'
          min={0}
          fontSize={1}
          padding={2}
          style={{paddingLeft: '22px', paddingRight: '2px'}}
          icon={<HeightIcon width={15} color={theme.color.button.ghost.primary.enabled.fg} />}
          value={`${initialSize.height}`}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
        />
      </Card>
    </>
  )
}
