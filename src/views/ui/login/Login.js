import React from 'react'
import { NavLink } from  "react-router-dom"
const Login = () => {
  return (
    <div style={{margin:"4rem"}}>
        <form>
          <label>Username</label>
          <input type='text' /><br />
          <label>password</label>
          <input type='password' /><br />
          <button type='submit'>Login</button><br />
        </form>
    </div>
  )
}

export default Login