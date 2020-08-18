export interface NavigationObject {
  name: string,
  destination: string,
  icon?: string,
  active: boolean
}

export const NavigationRoutes: NavigationObject[ ] = [
  {
    name: 'Home',
    destination: 'home',
    icon: 'home',
    active: false
  }
]