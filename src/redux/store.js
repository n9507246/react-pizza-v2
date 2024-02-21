import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/test.js'
import filterSlice from './slices/filterSlice.js'
import pizzaSlice from './slices/pizzaSlice.js'

export const store = configureStore({
    reducer: {
      counter: counterReducer,
      filter: filterSlice,
      pizzas: pizzaSlice,

    },
})