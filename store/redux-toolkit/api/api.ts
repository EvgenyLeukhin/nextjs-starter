import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from './api.types';

export const api = createApi({
  // uniq key
  reducerPath: 'api',

  // api url RTK Query
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),

  // все запросы здесь
  endpoints: builder => ({
    // number for limit
    getProducts: builder.query<IProduct[], number>({
      query: (limit = 5) => `products?limit=${limit}`, // endpoint {baseUrl}/products
    }),

    // getPosts: builder.query({
    //   query: () => '/posts',
    // }),

    // other request any params
    // getPokemonByName: builder.query<IPokemon, string>({
    //   query: name => `pokemon/${name}`,
    // }),

    // addNewPost: builder.mutation({
    //   query: (payload) => ({
    //     url: '/posts',
    //     method: 'POST',
    //     body: payload,
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   }),
    //   // invalidatesTags: ['Post'],
    // }),
  }),
});

// магия toolkit (автогенерация)  хук, который содержит все запросы
export const {
  useGetProductsQuery, // data, isLoading, isError - хук содержит параметры
  // useGetPokemonByNameQuery,
} = api;
