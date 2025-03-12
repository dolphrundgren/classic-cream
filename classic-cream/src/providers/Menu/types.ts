export interface MenuContextType {
  toggleMenu: (menuIsOpen: boolean | null | undefined) => void
  menuIsOpen?: boolean | null | undefined
}
