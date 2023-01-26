import React from 'react'

export default function ProductListprops(props) {

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
            <h4>Price : $ {props.price}</h4>
            <h4>Discount : {props.discountPercentage}</h4>
            <h4>Rating : {props.rating}</h4>
            <div className='mt-4'>
                <div className='product-options'>
                    <select className="form-select" style={{width:"30%",marginRight:"50px"}} aria-label=".form-select-sm example">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <button className="btn btn-danger" style={{width:"50px"}}><i class="fa fa-trash"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}
