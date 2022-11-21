import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./product";
import counterProductReducer from "./counterProduct"

export default combineReducers({
  auth: authReducer,
  products: productReducer,
  counter: counterProductReducer,
});
