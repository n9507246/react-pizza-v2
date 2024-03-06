import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice.js'
import pizzaSlice from './slices/pizzaSlice.js'
import cartSlice from './slices/cartSlice.js'

export const store = configureStore({
    reducer: {
      filter: filterSlice,
      pizzas: pizzaSlice,
      cart: cartSlice
    },
})