import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductList } from '../data/ProductList'

export default function Dashboard() {
  return (
    <div className='dashboard'>
        {ProductList.map(product => <ProductCard key = {product.id} product = {product}/>)}
    </div>
  )
}
