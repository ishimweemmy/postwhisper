import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import user from "../features/userSlice";
const persistConfig = {
  key: "root",
  storage,
};
const ALL_REDUCERS = combineReducers({
  user,
});
const persistedReducer = persistReducer(persistConfig, ALL_REDUCERS);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
