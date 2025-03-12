'use client'
import React, { createContext, useState } from 'react'

interface MenuInterface {
  isMenuOpen: boolean | null
  setIsMenuOpen: {}
}

export const MenuContext = createContext<MenuInterface>(null)

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return <MenuContext.Provider value={isMenuOpen}>{children}</MenuContext.Provider>
}
