import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import themeReducer from "./themeReducer";
export default combineReducers({
  errors: errorReducer,
  themeMode: themeReducer,
});
