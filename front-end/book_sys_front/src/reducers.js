import { combineReducers } from "redux";
import { saveLoginInfo } from "./saveLoginInfo";

const reducers = combineReducers({
  saveLoginInfo: saveLoginInfo,
});

export default reducers;
