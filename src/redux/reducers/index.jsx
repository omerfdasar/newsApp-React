import { combineReducers } from "redux";
import appReducer from "./appReducer.jsx";
import newsReducer from "./newsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  app: appReducer,
  news: newsReducer,
  auth: authReducer,
});
export default rootReducer;
