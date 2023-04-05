import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../api/api.types';

const initialState: IProduct[] = [
  {
    category: "men's clothing",
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  },
];

// creater slice
export const cartSlice = createSlice({
  name: 'cart',

  // initial state
  initialState,

  // reducer with actions
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      // add product from the state
      state.push(action.payload);
    },

    removeItem: (state, action: PayloadAction<number>) => {
      // delete product from the state
      return state.filter(product => product.id !== action.payload);
    },

    // clear cart
    clearItems: () => [],
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
