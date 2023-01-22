import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header-div'>
            <div className='logo-div'>
                <img src="annachilogo.png" alt="annachilogo" className ="img-thumbnail"/>
            </div>
            <div className='nav-div'>
                <input className='form-control' type="search" placeholder = "search" />
                <Link className ="nav-link" to="#">Cart </Link> 
                <Link className ="nav-link" to="/">Home </Link> 
                <Link className ="nav-link" to="#">About </Link>
                <Link className ="nav-link" to="#">Contact </Link>
            </div>
        </div>
    )
}
