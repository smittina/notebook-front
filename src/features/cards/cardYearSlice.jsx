import {createSlice} from "@reduxjs/toolkit";

export const cardYearSlice = createSlice({
   name:'currentCard',
   initialState:  {},
   reducers: {
       addCurrentCard: (currentState, action) => {
           return action.payload;
       }
   }
});