import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
import reducers from "./reducers/index"

const persisConfig = {
  key: "raz",
  storage,
}

const persistedReducer = persistReducer(persisConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }).concat(logger),
})

export const persistedStore = persistStore(store);
export default store;