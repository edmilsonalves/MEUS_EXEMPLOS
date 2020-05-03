import { createSlice } from "@reduxjs/toolkit";

export const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: { summary: { credit: 100, debt: 50 } },
  reducers: {
    setSummary: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setSummary } = DashboardSlice.actions;
export const summary = (state) => state.dashboard.summary;

export default DashboardSlice.reducer;
