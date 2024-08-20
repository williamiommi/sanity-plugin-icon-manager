import {useEffect, useMemo} from 'react'
import {ObjectInputProps, useCurrentUser} from 'sanity'

import {default as userCanConfigureByRole} from '../lib/userCanConfigureByRole'
import {useAppStoreContext} from '../store/context'
import IconManagerPluginOptions from '../types/IconManagerPluginOptions'

export default function useUserCanConfigure(
  objectInputProps: ObjectInputProps,
  pluginOptions: IconManagerPluginOptions | void,
): void {
  const currentUser = useCurrentUser()
  const setUserCanConfigure = useAppStoreContext((s) => s.setUserCanConfigure)
  const userRoles = useMemo(() => currentUser?.roles.map((role) => role.name) || [], [currentUser])
  useEffect(() => {
    setUserCanConfigure(
      userCanConfigureByRole(userRoles, pluginOptions?.configurationDialog?.hideFor),
    )
  }, [])
}
