import React from 'react'
import './loginPage.css'

function LoginPage() {
  return (
    <div className='body'>
      <div className='mainContainer'>
        <div className='container'>
          <h1>
            Login
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className='inputField'>
              <input type="text" placeholder="Username" />
              <span>icon</span>
            </div>
            <div className='inputField'>
              <input type="password" placeholder="Password" />
              <span>icon</span>
            </div>
            <div className='forgotSection'>
              <input type="checkbox" /> Remember Me
              <button className='forgotButton'>Forgot Password?</button>
            </div>

            <button className='loginButton'>Login</button>
          </div>
          <div className='registerSection'>
            <span>
              Don't have an account?
            </span>
            <button className="registerButton">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
