import React from 'react'
import { useSelector } from 'react-redux'
import ProductListItem from '../components/ProductListItem'

export default function Cart() {
    const list = useSelector((state)=>{
        return state.cart.list
    })

    return(
        <div>
                {list.length > 0 ? list.map(item => <ProductListItem key = {item.id} {...item}/>,
            )
            :
                <div style={{height: '80vh'}}>
                    <h3>Your Cart is Empty ! </h3>
                    <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.</p>
                </div>
            }
        </div>
    )
}
