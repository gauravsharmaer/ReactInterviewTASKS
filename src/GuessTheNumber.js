import React, { useState } from 'react'

const GuessTheNumber = () => {
    const [input,setInput]=useState(1);

    let random=0;
    const generator =()=>{
random =Math.floor(Math.random()*100 )
console.log(random)
    }
    
    const handleReset=()=>{
     setInput(1)
    }
    const handleCheck=()=>{
      generator()
      if(input>random){
        alert("higher than actual")
      }
      if(input<random){
        alert("lower than actual")
      }
      if(input===random){
        alert("congrats")
      }
    }
  return (
   <>
    <input type='number' value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleCheck}>Check</button>
   </>
  )
}

export default GuessTheNumber