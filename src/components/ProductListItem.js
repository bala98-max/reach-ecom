import React from 'react'
import {priceDepQty, removeItems} from '../redux/reducer/cart'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function  ProductListprops(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const productCount= ()=>{
        let count = document.getElementById('count').value;

        // let price = props.price * ((100 - props.discountPercentage) / 100)
        // let totalAmt = Math.round(count * price)
        let totalAmt = props.price * count 
        let obj = {...props}
        obj.price = totalAmt
        dispatch(priceDepQty(obj))
    }
    
   
    const RemoveFromCart = ()=>{
        dispatch(removeItems(props))
    }

  return (
    <div className='product-dashboard'>
        <div className='product-img'>
            <img src={props.images[0]} alt={props.title} />
            {/* <button><i className="fa-solid fa-circle-arrow-left"></i></button> */}
            {/* <button><i className="fa-regular fa-circle-arrow-right"></i></button> */}
        </div>
        <div className='product-body'>
            <h3>{props.title}</h3>
            <h4>Brand : {props.brand}</h4>
            <h4>Price : $ {props.amtDepQuty}</h4>
            <h4>Discount : {props.discountPercentage} %</h4>
            <h4>Rating : {props.rating}</h4>
            <div className='mt-4'>
                <div className='product-options'>
                    <select id = "count" onChange={productCount} className="form-select" style={{width:"30%",marginRight:"50px"}} aria-label=".form-select-sm example">
                        <option defaultValue={1} value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <button className="btn btn-danger" onClick={RemoveFromCart} style={{width:"50px"}}><i className="fa fa-trash"></i></button>
                </div>
            </div>
        </div>
        <button className='btn btn-success' onClick={()=>{navigate('/checkout')}}>Go To Checkout</button>
    </div>
  )
}
