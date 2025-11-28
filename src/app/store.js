import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {notebookApi} from "../services/NotebookApi.jsx";
import {readingsListSlice} from "../features/readings/readingsListSlice.jsx";
import {cardYearSlice} from "../features/cards/cardYearSlice.jsx";

let state = {
    readingsList: [],
    currentCard: null,
}

export const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        readingsList: readingsListSlice.reducer,
        currentCard: cardYearSlice.reducer,
        [notebookApi.reducerPath]: notebookApi.reducer,
    }),
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(notebookApi.middleware)
})