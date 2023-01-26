import React from 'react'
import { useSelector } from 'react-redux'
import ProductListItem from '../components/ProductListItem'

export default function Cart() {
    const list = useSelector((state)=>{
        return state.cart.list
    })

    return(
        <>
            {list.map(item => <ProductListItem key = {item.id} {...item}/>)}
        </>
    )
}
