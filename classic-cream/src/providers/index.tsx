import React from 'react'

import { ThemeProvider } from './Theme'
import { DialogProvider } from './Dialog'
import { ReCaptchaProvider } from 'next-recaptcha-v3'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ReCaptchaProvider>
      <DialogProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </DialogProvider>
    </ReCaptchaProvider>
  )
}
