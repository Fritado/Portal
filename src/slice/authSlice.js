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
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    // logoutUser: (state) => {
    //   state.isAuthenticated = false;
    //   state.user = null;
    // },
    userToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { loginUser, userToken } = authSlice.actions;

export default authSlice.reducer;
