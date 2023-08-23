import React, { useState } from 'react'
import "./App.css"
const Toggle = () => {
    const[darkmode,setDarkmode]=useState(false)
    const handleToggle=()=>{
        if(darkmode){
            setDarkmode(false)
        }
        else{
            setDarkmode(true)
        }
    }
  return (
    <div className={darkmode ? "trydark":"tryorange"}>
        <h2>hello world</h2>
        <button className={darkmode ? "btndark":"btnorange"} onClick={handleToggle}>toggle</button>
    </div>
  )
}

export default Toggle