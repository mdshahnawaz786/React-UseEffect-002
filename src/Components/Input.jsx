import React from 'react'
import './input.css'

const Input = ({first,setfirst,button,setButton}) => {
  return (
    <>
      <div className="inputContainer">
        <input type="text" placeholder='search' onChange={(e)=>{
            setfirst(e.target.value)
        }}/>
        
        <button onClick={()=>{
            if(first === ""){
                alert("Enter Input")
            }
            setButton(!button)
        }}>SEARCH</button>
      </div>
    </>
  )
}

export default Input
