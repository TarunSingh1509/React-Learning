import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    if(count < 100)setCount(count + 1)
    else alert("Count cannot be greater than 100")
  }
  const decrement = () => {
    if(count > 0) setCount(count - 1)
    else alert("Count cannot be negative")
  }
  return (
    <>
    <div style={{margin:"40px",fontWeight:"800", fontSize:"30px"}}>Count Range is 0 to 100 only</div>
    <div style={{margin:"20px",fontWeight:"800",fontSize:"30px"}}>Count: {count}</div>
    <button onClick={increment} style={{fontSize:"30px",margin:"20px"}}>Increment by 1</button>
    <button onClick={decrement} style={{fontSize:"30px",margin:"20px"}}>Decrement by 1</button>
    </>
  )
}

export default App
