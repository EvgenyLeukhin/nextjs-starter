import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// api
import { api } from './api/api';

// reducers
import { cartReducer } from './cart/cart.slice';

// @reduxjs/toolkit
// react-redux

export const storeToolkit = configureStore({
  reducer: {
    // API
    [api.reducerPath]: api.reducer,

    // Add the generated reducer as a specific top-level slice
    cart: cartReducer,

    // other slices
    // slice1: slice1Reducer,
    // slice2: slice2Reducer,
    // sliceN: sliceNReducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),

  // devTools
  devTools: true,
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(storeToolkit.dispatch);

export type TypeRootState = ReturnType<typeof storeToolkit.getState>;
