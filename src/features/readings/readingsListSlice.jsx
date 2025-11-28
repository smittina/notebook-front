import {createSlice} from "@reduxjs/toolkit";

export const readingsListSlice = createSlice({
    name: 'readingsList',
    initialState: {
    },
    reducers: {
        addReadings: (currentState, action) => {
            return action.payload;
        }
    }
})