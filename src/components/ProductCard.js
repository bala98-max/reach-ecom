import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard(props) {
    // console.log('props------',props)
    const navigate = useNavigate()
  return (
    <div className='product-card'>
        <div className='productcard-content' role="button" onClick={()=>{navigate(`/product/${props.id}`)}}>
            <img  alt ={props.title} src={props.images[0]} />
            <div className='productcard-body'>
                <h5 className='mt-2'>{props.title}</h5>
                <h6 className='mt-2'>Price : $ {props.price}</h6>
                <h6 className='mt-2'>Discount : {props.discountPercentage}%</h6>
                <h6 className='mt-2'>Rating : {props.rating}</h6>
                <div>
                    {props.stock > 0 ? <button className='btn btn-outline-success'>Available</button>:<button className='btn btn-outline-warning'>Out of stock</button>}
                </div>
            </div>
        </div>
    </div>
  )
}
