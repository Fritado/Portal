import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pageSpeedData: null,
  };

  const pageSpeedSlice = createSlice({
    name:"pageSpeed",
    initialState,
    reducers:{
        setSpeedData:(state , action) =>{
        state.pageSpeedData = action.payload
        }
    }
  })

  export const {setSpeedData} = pageSpeedSlice.actions;
  export default pageSpeedSlice.reducer