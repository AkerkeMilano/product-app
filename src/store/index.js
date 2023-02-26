import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import loginSlice from "./loginSlice";
const rootReducer = combineReducers({
  productList: productSlice,
  cartList: cartSlice,
  login: loginSlice, 
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;