import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    async function(paramsQuery){
        const response = await axios.get(
            `https://65cc38e9dd519126b83e219c.mockapi.io/api/v1/pizzas`,
            { params: paramsQuery } 
        )
        return response.data
    }
)

const initialState = {
  list:[],
  isLoading: false,
  error: null
}

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(
        fetchPizzas.pending, 
        (state) => {
            state.isLoading = true
            state.error = null
        }
    )
    builder.addCase(
        fetchPizzas.fulfilled, 
        (state, action) => {
            state.isLoading = false
            state.list = action.payload
        }
    )

  }
})

// Action creators are generated for each case reducer function
export const {} = pizzaSlice.actions

export default pizzaSlice.reducer