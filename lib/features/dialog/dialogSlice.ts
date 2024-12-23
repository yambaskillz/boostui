import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export interface DialogState {
  isOpen: boolean
  content: ReactNode | null | undefined
}

const initialState: DialogState = {
  isOpen: false,
  content: null,
}

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog(state) {
      state.isOpen = true
    },
    closeDialog(state) {
      state.isOpen = false
    },
    setContent(state, action: PayloadAction<ReactNode>) {
      state.content = action.payload
    },
  },
  selectors: {
    selectIsOpen: (dialog) => dialog.isOpen,
  },
})

export const { openDialog, closeDialog, setContent } = dialogSlice.actions
export default dialogSlice.reducer
