import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState : {
        list : []
    },
    reducers:{
        addItems:(state,{payload})=>{
            state.list = [...state.list,payload]
        }
    }
})

export const {addItems} = cartSlice.actions;
export default cartSlice.reducer;



