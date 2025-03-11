import React from 'react'

import { ThemeProvider } from './Theme'
import { MenuProvider } from './Menu'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <MenuProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </MenuProvider>
  )
}
