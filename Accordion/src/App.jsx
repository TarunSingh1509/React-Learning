import React from 'react'
import { useState } from 'react'

function App() {
  const [activeIndex, setActiveIndex] = useState(true)
  const activeIndexHandler = (e) => {
    setActiveIndex(!activeIndex)
    const id = e.target.parentElement.parentElement.id
    console.log(id)
  }

  return (
    <>
    <div style={{ display:'flex', flexDirection:'column', gap:"20px"}}>

    <div id='1' style={{border:"2px solid black",}}>
    <div style={{display:'flex', gap:'10px', justifyContent:'center', alignItems:'center'}}>
      <h1>Title</h1>
      <button onClick={activeIndexHandler}>{activeIndex?'-':'+'}</button>
    </div>
    {activeIndex?
    <h2 style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'10px', justifyContent:'center', alignItems:'center'}}>Content</h2>:""}
    </div>
    <div id='2' style={{border:"2px solid black", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <div style={{display:'flex', gap:'10px', justifyContent:'center', alignItems:'center'}}>
      <h1>Title</h1>
      <button onClick={activeIndexHandler}>{activeIndex?'-':'+'}</button>
    </div>
    {activeIndex?
    <h2 style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'10px', justifyContent:'center', alignItems:'center'}}>Content</h2>:""}
    </div>
    </div>
    </>
  )
}

export default App
