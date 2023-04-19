import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import processReducer from "./processReducer";

const allReducers = combineReducers({
  loginReducer,
  processReducer,
});

export default allReducers;
