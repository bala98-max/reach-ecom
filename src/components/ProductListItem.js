import React from 'react'

export default function  ProductListprops(props) {
 

  return (
    <div className='product-dashboard'>
        <div className='product-img'>
            <img src={props?.images[0]} alt={props.title} />
        </div>
        <div className='product-body'>
            <h3>{props.title}</h3>
            <h4>Brand : {props.brand}</h4>
            <h4>Price : $ {props.amtDepQuty}</h4>
            <h4>Discount : {props.discountPercentage} %</h4>
            <h4>Rating : {props.rating}</h4>
            <div className='mt-4'>
                <div className='product-options'>
                    <button className='product-count' onClick={props.incrementItem}><i className="bi bi-caret-up-fill"></i></button>
                    <h4 style={{marginRight:"15px"}} className='ms-3'>{props.count}</h4>
                    <button className='product-count' onClick={props.decrementItem} style={{marginRight:"15px"}}><i className="bi bi-caret-down-fill"></i></button>
                    <button className="btn btn-danger" onClick={props.removeItem} style={{width:"50px"}}><i className="fa fa-trash"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}
