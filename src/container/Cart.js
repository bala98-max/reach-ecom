import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const list = useSelector((state)=>{
        return state.cart.list
    })
    console.log("list",list)
  return (
    <div>{list[0]?.title}</div>
  )
}
