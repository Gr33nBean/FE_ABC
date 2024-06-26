import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accountSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
