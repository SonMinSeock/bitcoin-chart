import { configureStore } from "@reduxjs/toolkit";
import bitcoinSlice from "../slices/bitcoinSlice";

export const store = configureStore({
  reducer: {
    bitcoin: bitcoinSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
