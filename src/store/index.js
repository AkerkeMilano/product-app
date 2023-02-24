import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
  productList: productSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;