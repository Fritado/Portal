import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signUpdata: (state, action) => {
     
      state.user = action.payload;
    },

    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      // localStorage.setItem("firstname", firstname);
      // localStorage.setItem("lastname", lastname);
    },

    userToken: (state, action) => {
      state.token = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { loginUser, userToken, logoutUser ,signUpdata} = authSlice.actions;

export default authSlice.reducer;
