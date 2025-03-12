'use client'
import React, { createContext, useState } from 'react'
import type { MenuContextType } from './types'

const initialContext: MenuContextType = {
  menuIsOpen: false,
  toggleMenu: () => null,
}

export const MenuContext = createContext(initialContext)

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuIsOpen, setMenuState] = useState(false)

  const toggleMenu = (menuIsOpen: boolean | null) => {
    if (menuIsOpen === null) {
      setMenuState(false)
    } else {
      setMenuState(!menuIsOpen)
    }
  }

  return <MenuContext.Provider value={{ menuIsOpen, toggleMenu }}>{children}</MenuContext.Provider>
}
