import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductListItem from '../components/ProductListItem'
import { ProductList } from '../data/ProductList'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const navigate = useNavigate()
  const params = useParams()
  const list = useSelector((state) => {
    return state.cart.list
  })

  const [state, setState] = useState(params.id
    ? [{ ...ProductList.find(prod => prod.id === parseInt(params.id)), count: 1 }]
    : list)
  return (
    <>
      {state.length > 0 ? (
        <>
          {state.map((item) => <ProductListItem key={item.id} {...item}/>)}
          <button className='mt-6 btn btn-success checkout-btn' onClick={()=>{navigate('/placeorder')}}>Place Order</button>
        </>
      ) : (
        <div style={{ height: '80vh' }}>
          <h3>No Items to checkout! </h3>
          <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.</p>
        </div>
      )}

    </>
  )
}
