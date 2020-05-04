import { combineReducers } from "redux";

// import dashboardReducer from "../dashboard/dashboard.slice";
import tabReducer from "../common/tab/tab.slice";
import menuReducer from "../common/template/menu.slice";

const rootReducer = combineReducers({
  // dashboard: dashboardReducer,
  tab: tabReducer,
  menu: menuReducer,
});

export default rootReducer;
