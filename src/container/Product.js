import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList'
import { addItems } from '../redux/reducer/cart'
import { useDispatch } from 'react-redux'

export default function Product() {
    const params  = useParams()
    // console.log(params)
    const item = ProductList.find((element)=>{
        return element.id === parseInt(params.id)
    })
    const dispatch = useDispatch()
    const addTocart = ()=>{
        dispatch(addItems(item))
    }
  return (
    <div className='product-dashboard'>
        <div className='product-img'>
            <img src={item.images[0]} alt={item.title} />
            {/* <button><i className="fa-solid fa-circle-arrow-left"></i></button> */}
            {/* <button><i className="fa-regular fa-circle-arrow-right"></i></button> */}
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
                        <button className='btn btn-outline-success'>Buy Now</button>
                        <button className='ms-3 btn btn-outline-success' onClick={addTocart()}>Add To Cart</button>
                    </>
                ):(
                    <button className='btn btn-outline-warning'>Out Of Stock</button>
                )}
            </div>
        </div>
    </div>
  )
}
