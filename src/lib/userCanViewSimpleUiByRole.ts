export default function userCanViewSimpleUiByRole(
  userRoles: string[],
  simpleUiFor?: 'all' | string[],
): boolean {
  // no configuration, default UI
  if (!simpleUiFor) return false

  // if the option is set to 'all', everyone has the simple UI
  if (simpleUiFor === 'all') return true

  // some roles has been configured inside simpleUiFor
  if (Array.isArray(simpleUiFor) && simpleUiFor.length > 0) {
    let userHasSimpleView = false
    const defaultUiRolesSet = new Set()
    const simpleUiRolesSet = new Set()

    simpleUiFor.forEach((role) => {
      if (role.startsWith('!')) defaultUiRolesSet.add(role.substring(1, role.length))
      else simpleUiRolesSet.add(role)
    })

    if (simpleUiRolesSet.size !== 0) {
      userHasSimpleView = userRoles.some((role) => Array.from(simpleUiRolesSet).includes(role))
    }

    if (!userHasSimpleView && defaultUiRolesSet.size !== 0) {
      userHasSimpleView = userRoles.some((role) => !Array.from(defaultUiRolesSet).includes(role))
    }

    return userHasSimpleView
  }

  return false
}
