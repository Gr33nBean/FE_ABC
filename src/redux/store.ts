import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accountSlice";
import dialogSlice from "./features/dialogSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    dialog: dialogSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
