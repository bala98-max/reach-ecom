import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../container/Home'
// import 'font-awesome/css/font-awesome.min.css';

export default function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='*' element = {<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}
