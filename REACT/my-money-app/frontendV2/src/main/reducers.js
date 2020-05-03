import { combineReducers } from "redux";

import DashboardReducer from "../dashboard/dashboard.slice";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
});

export default rootReducer;
