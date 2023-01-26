import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState : {
        list : []
    },
    reducers:{
        addItems:(state,{payload})=>{
            console.log('payload-----',payload)
            state.list = [...state.list,payload]
            console.log('state------',state.list)
        },
    },
})

export const {addItems} = cartSlice.actions;
export default cartSlice.reducer;



