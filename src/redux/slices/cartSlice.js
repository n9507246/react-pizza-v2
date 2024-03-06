import { createSlice } from '@reduxjs/toolkit'


function createData(){
    const listItems = [
        {
            data:{
                imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
                title:"Сырная",
                size: {id:4, value:26},
                price:245,
                type: { id:2, name:'Тонкое'}
            },
            value:2,
        },
        {
            data: {
                imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
                title:"Чизбургер-пицца",
                size: {id:12, value:30},
                price:415,
                type: { id:5, name:'Тонкое'}
            },
            value: 1
        }
    ]
    const valueItemsToCart = listItems.reduce((totalValue, item) => { return totalValue + item.value }, 0)
    const totalPice =  listItems.reduce((totalPrice, item) => { return totalPrice + item.data.price * item.value }, 0)
    return { listItems, valueItemsToCart, totalPice }
} 

const initialState = createData()

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
        incValue: (state, action) => {

            const pizza = state.listItems.find(el =>  JSON.stringify(el.data) ===  JSON.stringify(action.payload.data))

            if(pizza.value > 1) pizza.value--

            else state.listItems = state.listItems.filter(
                item => JSON.stringify(item.data) !==  JSON.stringify(pizza.data))

            state.totalPice = state.totalPice - pizza.data.price
            state.valueItemsToCart--
        },
        decValue: (state, action) => {
            const pizza = state.listItems.find(el =>  JSON.stringify(el.data) ===  JSON.stringify(action.payload.data))
            pizza.value++
            state.totalPice = state.totalPice + pizza.data.price
            state.valueItemsToCart++
        }
    },
})

export const {addToCart,incValue,decValue} = cartSlice.actions

export default cartSlice.reducer