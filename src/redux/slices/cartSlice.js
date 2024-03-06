import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listItems:[],
    valueItemsToCart: 0,
    totalPice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            
            const pizza = state.listItems.find(el =>  JSON.stringify(el.data) ===  JSON.stringify(action.payload))
            if(pizza) pizza.value++
            else state.listItems.push({data: action.payload, value: 1})
            
            state.valueItemsToCart = state.valueItemsToCart + 1
            state.totalPice = state.totalPice + action.payload.price
        },
    },
})

// // Action creators are generated for each case reducer function
export const {addToCart} = cartSlice.actions

export default cartSlice.reducer