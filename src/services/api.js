// src/services/api.js
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.1.17:5000/api/'}), // example test API
  endpoints: builder => ({
    // loginUser: builder.mutation({
    //   query: credentials => ({
    //     url: 'User/Log',
    //     method: 'POST',
    //     body: credentials,
    //   }),
    // }),
    getTodo: builder.query({
      query: () => ({
        url: 'todos',
        method: 'GET',
      }),
    }),
  }),
})

export const {useGetTodoQuery} = loginApi
