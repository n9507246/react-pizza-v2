import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/test.js'

export const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
})