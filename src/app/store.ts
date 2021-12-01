import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from '../components/dialog/dialogSlice'

export const store = configureStore({
  reducer: {
    app: dialogReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;