import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const notebookApi = createApi({
    reducerPath: 'notebookApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/',
        mode:"cors",
    }),
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => `readings`
        }),
    }),
})

export const { useGetAllBooksQuery } = notebookApi;