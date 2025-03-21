'use client'
import React, { createContext, useState } from 'react'
import type { DialogContextType } from './types'

const initialContext: DialogContextType = {
  dialogIsOpen: false,
  toggleDialog: () => null,
}

export const DialogContext = createContext(initialContext)

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [dialogIsOpen, setDialogState] = useState<boolean | undefined>(false)

  const toggleDialog = (dialogIsOpen: boolean | null | undefined) => {
    if (dialogIsOpen === null) {
      setDialogState(false)
    } else {
      setDialogState(!dialogIsOpen)
    }
  }

  return (
    <DialogContext.Provider value={{ dialogIsOpen, toggleDialog }}>
      {children}
    </DialogContext.Provider>
  )
}
