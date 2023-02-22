import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsApi = createApi({
    reducerPath: "itemApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://www.themealdb.com/api/json/v1/1/" }),
    endpoints: (builder) => ({
        getItem: builder.query({
            query: () => `categories.php`,
        }),
        getItemByType: builder.query({
            query: (type) => `filter.php?c=${type}`,
        })
    })
});

export const { useGetItemQuery, useGetItemByTypeQuery } = itemsApi;