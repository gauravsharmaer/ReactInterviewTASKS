import React,{useState} from 'react'

const Counter= () => {
  const [ansValue,setAnsValue]=useState(0);
  const [inputBoxValue,setInputBoxValue]=useState(1);

  const handleIncrement=()=>{
    const newincans=ansValue + parseInt(inputBoxValue)
    setAnsValue(newincans)
  }


  const handleReset =()=>{
    setAnsValue(0) 
       setInputBoxValue(1)
  }

  const handleDecrement=()=>{
   
      const newdecans=ansValue - parseInt(inputBoxValue)
      setAnsValue(newdecans)
     
  }

  
  return (
    <>
      <h2>{ansValue}</h2>
      <button onClick={handleIncrement}>+</button>
       <button onClick={handleDecrement}>-</button>
       <input type='number' value={inputBoxValue} onChange={(e)=>setInputBoxValue(e.target.value)}/>
       <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Counter