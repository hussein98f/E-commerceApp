import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";
// import { IProduct } from "../../../interfaces";

interface CartDrawerItem {
  isOpenCartDrawer: boolean;
  onOpenCartDrawer: boolean;
  onCloseCartDrawer: boolean;
}

const initialState: CartDrawerItem = {
  isOpenCartDrawer: false,
  onOpenCartDrawer: false,
  onCloseCartDrawer: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    isOpenCartDrawer: (state) => {
      state.isOpenCartDrawer = !state.isOpenCartDrawer;
    },
    onOpenCartDrawer: (state) => {
      state.isOpenCartDrawer = true;
      state.onOpenCartDrawer = true;
    },
    onCloseCartDrawer: (state) => {
      state.onCloseCartDrawer = false;
      state.isOpenCartDrawer = false;
    },
  },
});

export const { isOpenCartDrawer, onOpenCartDrawer, onCloseCartDrawer } =
  globalSlice.actions;

export const selecGlobal = ({ global }) => global;

export default globalSlice.reducer;
