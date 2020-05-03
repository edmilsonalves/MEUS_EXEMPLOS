import { combineReducers } from "redux";

import dashboardReducer from "../dashboard/dashboard.slice";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;
