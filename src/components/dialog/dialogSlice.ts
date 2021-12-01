import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  dialogIsOpen: boolean;
}

const initialState: AppState = {
  dialogIsOpen: false
};

const dialogSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openDialog(state) {
      state.dialogIsOpen = true;
    },
    closeDialog(state) {
      state.dialogIsOpen = false;
    }
  }
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
