import {FormEvent, useMemo, useState} from 'react'
import {useAppStore} from '../store'
import {IconifyColor, IconifySize} from '../types/IconifyType'

type Flip = 'horizontal' | 'vertical' | 'horizontal,vertical' | undefined

interface useConfigurationStateProps {
  icon?: string
  flipH?: boolean
  flipV?: boolean
  flip: Flip
  rotate?: number
  size: IconifySize
  color?: IconifyColor
  onClickFlipH: () => void
  onClickFlipV: () => void
  onChangeRotate: (event: FormEvent<HTMLButtonElement>) => void
  onChangeWidth: (event: FormEvent<HTMLInputElement>) => void
  onChangeHeight: (event: FormEvent<HTMLInputElement>) => void
  onChangeColor: (color: any) => void
  saveConfiguration: () => void
}

const useConfigurationState = (): useConfigurationStateProps => {
  const sanityValue = useAppStore((s) => s.sanityValue)
  const [flipH, setFlipH] = useState<boolean | undefined>(sanityValue?.metadata?.flipH)
  const [flipV, setFlipV] = useState<boolean | undefined>(sanityValue?.metadata?.flipV)
  const [rotate, setRotate] = useState<number | undefined>(sanityValue?.metadata?.rotate || 0)
  const [size, setSize] = useState<IconifySize>(
    sanityValue?.metadata.size || {width: 16, height: 16},
  )
  const [color, setColor] = useState<IconifyColor | undefined>(sanityValue?.metadata?.color)

  const flip = useMemo((): Flip => {
    let output: Flip
    if (flipH) output = 'horizontal'
    if (flipV) output = 'vertical'
    if (flipH && flipV) output = 'horizontal,vertical'
    return output
  }, [flipV, flipH])

  const onClickFlipH = () => {
    setFlipH((s) => !s)
  }

  const onClickFlipV = () => {
    setFlipV((s) => !s)
  }

  const onChangeRotate = (event: FormEvent<HTMLButtonElement>) => {
    let newValue = Number(event.currentTarget.dataset.value)
    if (rotate === newValue) {
      newValue = 0
    }
    setRotate(newValue)
  }

  const onChangeWidth = (event: FormEvent<HTMLInputElement>) => {
    setSize({...size, width: Number(event.currentTarget.value)})
  }
  const onChangeHeight = (event: FormEvent<HTMLInputElement>) => {
    setSize({...size, height: Number(event.currentTarget.value)})
  }

  const onChangeColor = (colorToSave: any) => {
    setColor(colorToSave)
  }

  const saveConfiguration = () => {}

  return {
    icon: sanityValue?.icon,
    flipH,
    flipV,
    flip,
    rotate,
    size,
    color,
    onClickFlipH,
    onClickFlipV,
    onChangeRotate,
    onChangeWidth,
    onChangeHeight,
    onChangeColor,
    saveConfiguration,
  }
}

export default useConfigurationState
