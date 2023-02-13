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
                let payloadUpdate = {...payload,count : 1}
                payloadUpdate["amtDepQuty"] = payload.price
                state.list = [...state.list,payloadUpdate]
            }

        },
        removeItems:(state,{payload})=>{
            const ind = state.list.findIndex((product)=> product.id === payload.id)

            state.list = [
                ...state.list.slice(0,ind),
                ...state.list.slice(ind + 1)
            ]
        },
        modifyItem:( state,{ payload })=>{
            const ind = state.list.findIndex((product)=> product.id === payload.id)
            
            state.list = [
                ...state.list.slice(0,ind),
                {...state.list[ind],count : payload.count},
                ...state.list.slice(ind + 1)
            ]
        }

    }
})

export const {addItems,removeItems,modifyItem} = cartSlice.actions;
export default cartSlice.reducer;



