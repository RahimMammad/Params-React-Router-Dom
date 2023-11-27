import React from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login_main_container'>
          <h2>Login</h2>
          <div className="login_input_container">
              <input type="email" name='login.email' placeholder='Email or Username' />
              <input type="password" name='login.password' placeholder='Enter your Password' />
              <button>Login</button>
              <div className="login_question">
                <p>Don't have an account yet?</p>
                <Link to='/register'>Register</Link>
              </div>
          </div>
      </div>
  )
}

export default Login