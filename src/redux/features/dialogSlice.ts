import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DialogState {
  isOpenViewImage: {
    index: number;
    images: string[];
  };
}

const initialState: DialogState = {
  isOpenViewImage: {
    index: -1,
    images: [],
  },
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
  },
});

export const selectIsOpenViewImage = (state: { dialog: DialogState }) =>
  state.dialog.isOpenViewImage;

export const { setIsOpenViewImage } = dialogSlice.actions;
export default dialogSlice.reducer;
