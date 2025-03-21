import React from 'react'

import { ThemeProvider } from './Theme'
import { DialogProvider } from './Dialog'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <DialogProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </DialogProvider>
  )
}
