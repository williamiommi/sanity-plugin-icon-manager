import {Card, Text, Tooltip} from '@sanity/ui'
import {ReactElement} from 'react'

interface ButtonTooltipProps {
  tooltipText: string
  children: ReactElement
}

const ButtonTooltip = ({tooltipText, children}: ButtonTooltipProps) => {
  return (
    <Tooltip
      portal
      placement='left'
      fallbackPlacements={['right', 'bottom']}
      content={
        <Card padding={2}>
          <Text size={1}>{tooltipText}</Text>
        </Card>
      }
    >
      {children}
    </Tooltip>
  )
}

export default ButtonTooltip
