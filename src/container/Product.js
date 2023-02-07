import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList'
import { addItems } from '../redux/reducer/cart'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate  } from 'react-router-dom'

export default function Product() {
    const params  = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const list = useSelector((state)=>state.cart.list)

    const item = ProductList.find((element)=>{
        return element.id === parseInt(params.id)
    })

    const element = list.find((prod)=> prod.id === item.id)

    const addTocart = ()=>{
        dispatch(addItems(item))
    }

  return (
    <div className='product-dashboard'>
        <div className='product-img'>
            <img src={item.images[0]} alt={item.title} />
        </div>
        <div className='product-body'>
            <h3>{item.title}</h3>
            <h4>Brand : {item.brand}</h4>
            <h4>Price : $ {item.price}</h4>
            <h4>Discount : {item.discountPercentage}</h4>
            <h4>Rating : {item.rating}</h4>
            <div className='mt-4'>
                {item.stock > 0 ? (
                    <>
                        <button className='btn btn-outline-success' style={{margin : "4px"}}>Buy Now</button>
                        {element ? <button className='ms-3 btn btn-outline-warning' onClick={()=>{navigate('/cart')}}>Go To Cart</button> : <button className='ms-3 btn btn-outline-success' onClick={addTocart}>Add To Cart</button>}
                    </>
                ):(
                    <button className='btn btn-outline-warning'>Out Of Stock</button>
                )}
            </div>
        </div>
    </div>
  )
}
