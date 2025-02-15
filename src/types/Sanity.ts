import {ObjectDefinition, ObjectOptions} from 'sanity'

import IconManagerPluginOptions from './IconManagerPluginOptions'

export type IconManagerDefinition = Omit<
  ObjectDefinition,
  'type' | 'fields' | 'components' | 'options'
> & {
  type: 'icon.manager'
  options?: IconManagerPluginOptions & Omit<ObjectOptions, 'columns'>
}

declare module 'sanity' {
  // redeclares IntrinsicDefinitions and adds a named definition to it
  // it is important that the key is the same as the type in the definition ('magically-added-type')
  export interface IntrinsicDefinitions {
    'icon.manager': IconManagerDefinition
  }
}
