import React, { useState } from 'react'

const TelephoneFormatter = () => {
    const [value,setValue]=useState("")
    console.log(value)

const fomatfun=(value)=>{
if(!value){
    return value
}
const newValue = value.split("")
const newValArray=newValue.filter((str)=>"0123456789".includes(str)).join("")
if(newValArray.length>3){
    return `+(${newValArray.substring(0,3)}) - ${newValArray.substring(3)}`
}
return newValArray

}

    const formatString=(e)=>{
const formatted=fomatfun(e.target.value)
setValue(formatted)
    }
  return (
    <input type='tel' value={value} onChange={formatString}/>
  )
}

export default TelephoneFormatter
