import { combineReducers } from "redux";

// import dashboardReducer from "../dashboard/dashboard.slice";
import tabReducer from "../common/tab/tab.slice";

const rootReducer = combineReducers({
  // dashboard: dashboardReducer,
  tab: tabReducer,
});

export default rootReducer;
