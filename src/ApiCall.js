import React, { useEffect, useState } from 'react'

const ApiCall = () => {
    const[data,setData]=useState([])
    console.log(data)
    useEffect(()=>{
fetchData()
    },[])
    const fetchData=async()=>{
        const api=await fetch("https://fakestoreapi.com/products")
        const jsondata=await api?.json()
        setData(jsondata)
    }
  return (
    <div>ApiCall</div>
  )
}

export default ApiCall