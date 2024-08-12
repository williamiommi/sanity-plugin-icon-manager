/* eslint-disable react/no-danger */

import {ReactNode} from 'react'

interface SimpleHtmlRendererProps {
  html?: string
}

export default function SimpleHtmlRenderer({html}: SimpleHtmlRendererProps): ReactNode {
  if (!html) return null
  return <span dangerouslySetInnerHTML={{__html: html}} />
}
