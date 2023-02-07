import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState : {
        list : [],
    },
    reducers:{
        addItems:(state,{payload})=>{
            let present = state.list.find((x)=>{
                return x.id === payload.id
            })

            if(present === undefined){
                let payloadUpdate = {...payload}
                payloadUpdate["amtDepQuty"] = payload.price
                state.list = [...state.list,payloadUpdate]
            }

        },
        removeItems:(state,{payload})=>{
            state.list = state.list.filter(x => x.id !== payload.id)
        },
        priceDepQty:(state,{payload})=>{
            let test = state.list.map((prod)=>{
                if(prod.id === payload.id){
                    prod.amtDepQuty = payload.price
                }
                return prod
            })
            state.list = test
            console.log('test',test)
        }
    }
})

export const {addItems,removeItems,priceDepQty,presentInCart} = cartSlice.actions;
export default cartSlice.reducer;



