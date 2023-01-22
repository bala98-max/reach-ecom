import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Dashboard from './Dashboard'
import Product from './Product'

export default function Home() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/product/:id" element={<Product/>} />
            </Routes>
            <Footer/>
        </div>
    )
}
