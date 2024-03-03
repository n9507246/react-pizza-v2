import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    async function(paramsQuery, {rejectWithValue}){
        try{
            const response = await axios.get(
                `https://65cc38e9dd519126b83e219c.mockapi.io/api/v1/pizzas`,
                { params: paramsQuery } 
            )
            return response.data
        }catch(error){
            if(error.response.status == 404)
                return rejectWithValue("К сожалению по вашему запросу ничего не найдено.")
            else rejectWithValue("К сожалению по вашему запросу ничего не найдено.")
        }
    }
)

const initialState = {
    list:[],
    queryLimit: 8,
    page: 1,
    isLoading: false,
    error: null
}

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    changeCurrentPage: (state, action) => {
        state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
        fetchPizzas.pending, 
        (state) => {
            state.isLoading = true
            state.error = null
        }
    ).addCase(
        fetchPizzas.fulfilled, 
        (state, action) => {
            state.isLoading = false
            state.list = action.payload
        }
    ).addCase(
        fetchPizzas.rejected, 
        (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    )

  }
})

// Action creators are generated for each case reducer function
export const {changeCurrentPage} = pizzaSlice.actions

export default pizzaSlice.reducer