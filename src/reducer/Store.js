import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import pageSpeedReducer from "../slice/PageSpeedSlics";

//auth:authReducer,

const store = configureStore({
  reducer: {
    pageSpeed: pageSpeedReducer,
    //auth:authReducer,
  },
});

export default store;
