import {ROLE_ADMIN} from './constants'

export default function userCanConfigureByRole(
  userRoles: string[],
  hideFor?: 'all' | string[],
): boolean {
  // no configuration, default
  if (!hideFor) return true

  // if the option is set to 'all', nobody can configure
  if (hideFor === 'all') return false

  // if user is an admin, he can always configure
  if (userRoles.some((role) => role === ROLE_ADMIN)) return true

  // some roles has been configured inside hideFor
  if (Array.isArray(hideFor) && hideFor.length > 0) {
    let userCanFlag = false
    const hiddenRolesSet = new Set()
    const visibleRolesSet = new Set()

    hideFor.forEach((role) => {
      if (role.startsWith('!')) visibleRolesSet.add(role.substring(1, role.length))
      else hiddenRolesSet.add(role)
    })

    if (visibleRolesSet.size !== 0) {
      const visibleRolesArray = Array.from(visibleRolesSet)
      userCanFlag = userRoles.some((role) => visibleRolesArray.includes(role))
    }

    if (!userCanFlag && hiddenRolesSet.size !== 0) {
      const hiddenRolesSetArray = Array.from(hiddenRolesSet)
      userCanFlag = userRoles.some((role) => !hiddenRolesSetArray.includes(role))
    }

    return userCanFlag
  }

  return true
}
