import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  uid: string;
}

const initialState: AccountState = {
  uid: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUid(state, action: PayloadAction<string>) {
      state.uid = action.payload;
    },
  },
});

export const selectUid = (state: { account: AccountState }) =>
  state.account.uid;

export const { setUid } = accountSlice.actions;
export default accountSlice.reducer;
