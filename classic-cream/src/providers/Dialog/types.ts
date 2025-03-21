export interface DialogContextType {
  toggleDialog: (dialogIsOpen: boolean | null | undefined) => void
  dialogIsOpen?: boolean | null | undefined
}
