import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductListItem from '../components/ProductListItem'
import { modifyItem, removeItems } from '../redux/reducer/cart'

export default function Cart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const list = useSelector((state)=>{
        return state.cart.list
    })
    const incrementItem = (item)=>{
        // console.log('fuuncalled')
        dispatch(modifyItem({...item, count : item.count + 1}))
    }

    const decrementItem = (item)=>{
        if(item.count === 1){
            dispatch(removeItems(item))
        }else{
            dispatch(modifyItem({...item, count : item.count - 1}))
        }
    }

    const removeItem = (item)=>{
        console.log('function called')
        dispatch(removeItems(item))
    }

    return(
        <>
                {list.length > 0 ? (
                    <>
                        {list.map((item) => (
                        <ProductListItem 
                            key = {item.id} 
                            {...item} 
                            incrementItem={()=>incrementItem(item)} 
                            decrementItem={()=>decrementItem(item)} 
                            removeItem={()=>removeItem(item)}
                        />
                        ))}
                        <button className='btn btn-success btn-lg checkout-btn' onClick={()=>{navigate('/checkout')}}>Go To Checkout</button>
                    </>    
            )
            :
                <div style={{height: '80vh'}}>
                    <h3>Your Cart is Empty ! </h3>
                    <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.</p>
                </div>
            }
        </>
    )
}
