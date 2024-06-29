import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["todo"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (priority) => ({
                url: `/tasks?priority=${priority}`,
                method: "GET",
            }),
            providesTags: ["todo"],
        }),
        addTodo: builder.mutation({
            query: (data) => ({
                url: "/task",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["todo"]
        }),
        updateTodo: builder.mutation({
            query: (options) => ({
                url: `/task/${options?.id}`,
                method: "PUT",
                body: options?.data
            }),
            invalidatesTags: ["todo"]
        })
    }),
});


export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation } = baseApi;
