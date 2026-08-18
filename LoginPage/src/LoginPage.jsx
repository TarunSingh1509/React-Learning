import React, { useState } from 'react'
import './loginPage.css'
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function LoginPage() {
  const [passwordShow,setPasswordShow]=useState(false);
  const showPassword=()=>{
    ;
  }

  return (
    <div className='body'>
        <div className='container'>
          <h1>
            Login
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className='inputField'>
              <input type="text" placeholder="Username" />
              <span style={{cursor:"pointer"}}><MdEmail /></span>
            </div>
            <div className='inputField'>
              <input type={passwordShow?"text":"password"} placeholder="Password" />
              <span style={{cursor:"pointer"}} onClick={()=>setPasswordShow(!passwordShow)} ><FaLock /></span>
            </div>
            <div className='forgotSection'>
              <input type="checkbox" /> Remember Me
              <button className='forgotButton'>Forgot Password?</button>
            </div>
            <button className='loginButton'>Login</button>
          </div>
          <div className='registerSection'>
            <span style={{cursor:"pointer"}}>
              Don't have an account?
            </span>
            <button className="registerButton">Register</button>
          </div>
        </div>
      </div>
  )
}

export default LoginPage
