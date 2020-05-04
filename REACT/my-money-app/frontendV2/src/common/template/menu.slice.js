import { createSlice } from "@reduxjs/toolkit";

export const MenuSlice = createSlice({
  name: "menu",
  initialState: { selected: "" },
  reducers: {
    selected: (state, action) => {
      state.selected = action.payload;
    },
  },
});
export const { selected } = MenuSlice.actions;
export const menu = (state) => state.menu;

export default MenuSlice.reducer;
