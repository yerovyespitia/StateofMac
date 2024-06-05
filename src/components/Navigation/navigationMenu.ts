export const getMenuItems = (
  user: any,
  handleLogOut: Function,
  searching: Function
) => {
  return [
    {
      label: 'Home',
      href: '/',
      action: () => {},
    },
    {
      label: 'Games',
      href: '/games',
      action: () => {},
    },
    {
      label: user ? 'Logout' : 'Login',
      href: user ? '/' : '/login',
      action: user ? () => handleLogOut(null, false, false) : () => {},
    },
    {
      label: 'Search',
      href: '/search',
      action: () => searching(''),
    },
  ]
}
