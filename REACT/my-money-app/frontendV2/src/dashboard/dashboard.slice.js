import { createSlice } from "@reduxjs/toolkit";

export const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: { summary: { credit: 0, debt: 0 } },
  reducers: {
    setSummary: (state, action) => {
      if (state.summary) {
        state.summary = action.payload;
      }
    },
  },
});

export const { setSummary } = DashboardSlice.actions;
export const summary = (state) => state.dashboard.summary;

export default DashboardSlice.reducer;
