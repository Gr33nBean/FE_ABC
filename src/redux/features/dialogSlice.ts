import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DialogState {
  isOpenViewImage: {
    index: number;
    images: string[];
  };
  isOpenCreate: boolean;
}

const initialState: DialogState = {
  isOpenViewImage: {
    index: -1,
    images: [],
  },
  isOpenCreate: false,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setIsOpenViewImage(
      state,
      action: PayloadAction<{
        index: number;
        images: string[];
      }>
    ) {
      state.isOpenViewImage = action.payload;
    },

    setIsOpenCreate(state, action: PayloadAction<boolean>) {
      state.isOpenCreate = action.payload;
    },
  },
});

export const selectIsOpenViewImage = (state: { dialog: DialogState }) =>
  state.dialog.isOpenViewImage;

export const selectIsOpenCreate = (state: { dialog: DialogState }) =>
  state.dialog.isOpenCreate;

export const { setIsOpenViewImage, setIsOpenCreate } = dialogSlice.actions;
export default dialogSlice.reducer;
