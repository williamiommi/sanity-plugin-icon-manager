import {useEffect, useMemo} from 'react'
import {ObjectInputProps, useCurrentUser} from 'sanity'

import userCanConfigureByRole from '../lib/userCanConfigureByRole'
import {useAppStoreContext} from '../store/context'
import IconManagerPluginOptions from '../types/IconManagerPluginOptions'

export default function useUserCan(
  objectInputProps: ObjectInputProps,
  pluginOptions: IconManagerPluginOptions | void,
): void {
  const currentUser = useCurrentUser()
  const setUserCan = useAppStoreContext((s) => s.setUserCan)
  const userRoles = useMemo(() => currentUser?.roles.map((role) => role.name) || [], [currentUser])
  useEffect(() => {
    setUserCan({
      edit: !objectInputProps.readOnly,
      configure: userCanConfigureByRole(userRoles, pluginOptions?.configurationDialog?.hideFor),
    })
  }, [
    objectInputProps.readOnly,
    pluginOptions?.configurationDialog?.hideFor,
    setUserCan,
    userRoles,
  ])
}
