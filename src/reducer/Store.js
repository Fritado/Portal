import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../slice/authSlice";
import domainReducer from "../slice/PageSpeedSlics";
import tokenReducer from "../slice/tokenSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    domain: domainReducer,
    token: tokenReducer,
  },
});
