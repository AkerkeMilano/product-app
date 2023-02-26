import { createSlice } from "@reduxjs/toolkit";
import { loginData } from "./mock";

const loginSlice = createSlice({
  name: "cartSlice",
  initialState: {
    isFormOpened: false,
    loginVal: {},
    isLoggedIn: false,
    error: '',
  },
  reducers: {
    openLogin: (state, action) => {
        state.isFormOpened = action.payload;
    },
    submitLogin: (state, action) => {
        const isUserExist = loginData.some((user) => user.username === action.payload.username && user.password === action.payload.password);
        if(isUserExist){
            state.loginVal = action.payload;
            state.isLoggedIn = true;
            state.error = '';
            state.isFormOpened = false;
        } else {
            state.error = 'Неправильный логин или пароль!'
        }
    },
    logout: (state, action) => {
        state.isFormOpened = false;
        state.loginVal = {};
        state.isLoggedIn = false;
        state.error = '';
    }
  },
});

export default loginSlice.reducer;
export const {
    openLogin,
    submitLogin,
    logout
} = loginSlice.actions;