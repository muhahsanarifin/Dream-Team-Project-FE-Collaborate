import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auths";

export default combineReducers({
  auth: authReducer,
});