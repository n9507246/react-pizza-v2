import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: {
        list: [
            { "id": 1,  "name": "Мясные"},
            { "id": 2,  "name": "Вегетарианская"},
            { "id": 3,  "name": "Гриль"},
            { "id": 4,  "name": "Острые"},
            { "id": 5,  "name": "Закрытые"},
            { "id": 29, "name": "Разные"},
            { "id": 30, "name": "Очень вкусные"},
            { "id": 32, "name": "С пикантным ароматом"},
            { "id": 31, "name": "Божественные" },
        ],
    },
    sort: {
        variants : [
            {name:'самые популярные', sort:'raiting', direction: 'desc',  id: 0},
            {name:'дорогие', sort:'price', direction: 'desc' , id: 1},
            {name:'дешевые', sort:'price', direction: 'asc' , id: 2},
            {name:'по алфавиту', sort: 'title', direction: 'asc', id:3}   
        ],
        currentVariant: {name:'самые популярные', sort:'raiting', direction: 'desc',  id: 0},
    },
    search: {value: ''}
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeSortVarian: (state, action) => {
            state.sort.currentVariant = action.payload
        },
        changeSearchValue: (state, action) => {     
            state.search.value = action.payload
        }
   },
})

// // Action creators are generated for each case reducer function
export const {changeCategory,changeSortVarian, changeSearchValue} = filterSlice.actions

export default filterSlice.reducer