import { combineReducers } from "redux";
import { saveLoginInfo } from "./saveLoginInfo";
import { rentBookInfo } from "./rentBookInfo";

const reducers = combineReducers({
  saveLoginInfo: saveLoginInfo,
  rentBookInfo: rentBookInfo,
});

export default reducers;
