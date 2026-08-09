import React from 'react'
import { useState } from 'react'

function App() {
  const [activeIndex, setActiveIndex] = useState(true)

  return (
    <>
    <div style={{display:'flex', gap:'10px', justifyContent:'center', alignItems:'center'}}>
      <h1>Title</h1>
      <button onClick={() => setActiveIndex(!activeIndex)}>{activeIndex?'-':'+'}</button>
    </div>
    {activeIndex?
    <div>
    <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'10px', justifyContent:'center', alignItems:'center'}}>
      <li>Text</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
    </ul>
    </div>:""}
    </>
  )
}

export default App
