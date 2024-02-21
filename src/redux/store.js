import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/test.js'
import filterSlice from './slices/filterSlice.js'

export const store = configureStore({
    reducer: {
      counter: counterReducer,
      filter: filterSlice
    },
})