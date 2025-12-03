import {createSlice} from "@reduxjs/toolkit";

export const readingConfigSlice = createSlice({
    name:'config',
    initialState: {},
    reducers: {
        addConfig: (currentState, action) => {
            return action.payload;
        },
        addNewGenre: (currentState, action) => {
            return {
                genres: [...currentState.genres, action.payload],
                tropes: [...currentState.tropes]
            };
        },
        removeGenre: (currentState, action) => {
            return {
                genres : [...currentState.genres.filter(genre => genre !== action.payload)],
                tropes: [...currentState.tropes]
            }
        },
        addNewTrope: (currentState, action) => {
            return {
                genres: [...currentState.genres],
                tropes: [...currentState.tropes, action.payload]
            }
        },
        removeTrope: (currentState, action) => {
            return {
                genres: [...currentState.genres],
                tropes: [...currentState.tropes.filter(trope => trope !== action.payload)]
            }
         }
    }
})