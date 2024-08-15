import {Card, Text, Tooltip, TooltipProps} from '@sanity/ui'
import {ReactNode} from 'react'

export default function BaseTooltip(props: TooltipProps): ReactNode {
  return (
    <Tooltip
      {...props}
      content={
        <Card padding={2}>
          <Text size={1}>{props.content}</Text>
        </Card>
      }
    >
      {props.children}
    </Tooltip>
  )
}
