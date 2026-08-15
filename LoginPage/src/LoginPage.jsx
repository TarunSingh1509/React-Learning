import React from 'react'

function LoginPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div>
        Sign In/Sign Up
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
      <div>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default LoginPage
