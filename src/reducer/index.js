import { combineReducers } from "@reduxjs/toolkit";
// import all slices
import authReducer from "../slice/authSlice"


const rootReducer = combineReducers({
    auth:authReducer,

});

export default rootReducer;