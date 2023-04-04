import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from './products.types';

export const productsApi = createApi({
  // uniq key
  reducerPath: 'api/products',

  // api url RTK Query
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),

  // все запросы здесь
  endpoints: builder => ({
    // number for limit
    getProducts: builder.query<IProduct[], number>({
      // /products
      query: (limit = 5) => `products?limit=${limit}`,
    }),

    // other request any params
    // getPokemonByName: builder.query<IPokemon, string>({
    //   query: name => `pokemon/${name}`,
    // }),
  }),
});

// магия toolkit (автогенерация)  хук, который содержит все запросы
export const {
  useGetProductsQuery, // data, isLoading, isError - хук содержит параметры
  // useGetPokemonByNameQuery,
} = productsApi;
