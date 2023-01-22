import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard(props) {
    const navigate = useNavigate()
  return (
    <div className='product-card'>
        <div className='product-content' role="button" onClick={()=>{navigate(`/product/${props.product.id}`)}}>
            <img  alt ={props.product.title} src={props.product.images[0]} />
            <div className='product-body'>
                <h5 className='mt-2'>{props.product.title}</h5>
                <h6 className='mt-2'>Price : $ {props.product.price}</h6>
                <h6 className='mt-2'>Discount : {props.product.discountPercentage}%</h6>
                <h6 className='mt-2'>Rating : {props.product.rating}</h6>
                <div>
                    {props.product.stock > 0 ? <button className='btn btn-outline-success'>Available</button>:<button className='btn btn-outline-warning'>Out of stock</button>}
                </div>
            </div>
        </div>
    </div>
  )
}
