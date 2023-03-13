import React from 'react'
import { useState } from 'react'
import "../loginForm.css"

function LoginForm() {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleOnChangeUserName =(e)=>{
        setUserName(e.target.value)
    }

    const handleOnChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handleOnChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit=()=>{
        alert(`username:${userName} email:${email}`)
    }



  return (
    
    <form>
        <h1>Login form</h1>
        <div>
            <label>Username:</label>
            <input type="text" value={userName} onChange={handleOnChangeUserName} size="40" />
            </div>
            <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleOnChangeEmail} size="40" />
            </div>
            <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handleOnChangePassword} size="40" />
            </div>
            <div>
                <button type='submit' onClick={handleSubmit} >Submit</button>
            </div>
        
    </form>
    
  )
}

export default LoginForm