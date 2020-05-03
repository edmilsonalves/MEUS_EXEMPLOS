import { createSlice } from "@reduxjs/toolkit";

export const TabsSlice = createSlice({
  name: "tab",
  initialState: { selected: "" },
  reducers: {
    selectTab: (state, action) => {
      state.selected = action.payload;
    },
    showTabs: (state, action) => {
      const tabsToShow = {};
      const tabIds = action.payload;
      tabIds.forEach((e) => (tabsToShow[e] = true));

      state.visible = tabsToShow;
    },
  },
});

export const { selectTab } = TabsSlice.actions;
export const tab = (state) => state.tab;

export default TabsSlice.reducer;
