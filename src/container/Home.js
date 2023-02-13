import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Checkout from './Checkout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Cart from './Cart'
import Dashboard from './Dashboard'
import Product from './Product'
import PlaceOrder from './PlaceOrder'

export default function Home() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/product/:id" element={<Product/>} />
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout/'>
                    <Route path='' element={<Checkout/>}/>
                    <Route path=':id' element={<Checkout/>}/>
                </Route>
                <Route path='/placeorder' element={<PlaceOrder/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
