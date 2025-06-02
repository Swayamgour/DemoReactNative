// src/services/api.js
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://super.phoneo.in/api/'}), // example test API
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: credentials => ({
        url: 'User/Log',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const {useLoginUserMutation} = loginApi
