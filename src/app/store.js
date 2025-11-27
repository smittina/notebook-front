import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {notebookApi} from "../services/NotebookApi.jsx";

let state = {
}

export const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        [notebookApi.reducerPath]: notebookApi.reducer,
    }),
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(notebookApi.middleware),
})