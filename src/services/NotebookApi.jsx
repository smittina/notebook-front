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
        getYearDetails: builder.query({
            query: (year) => `readings/${year}`
        }),
        getReadingDetails: builder.query({
            query: (id) => `readings/reading-detail/${id}`
        }),
        getFormInformation: builder.query({
            query: () => `readings/form-information`
        }),
    }),
})

export const { useGetAllBooksQuery, useLazyGetYearDetailsQuery, useGetReadingDetailsQuery, useGetFormInformationQuery } = notebookApi;