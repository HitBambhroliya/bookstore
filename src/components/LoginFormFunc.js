import React, { useState } from 'react'

function LoginFormFunc() {

    const [user,setUser]=useState({email:"",password:""})

    const changeHandler=(e)=>{
            setUser({...user,[e.target.name]:e.target.value})
    }

    const handleClick=()=>{
        alert(`your emil is:${user.email} and your password is:${user.password}`)
    }

  return (
    <>    <div>
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={changeHandler} />
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password" value={user.password} onChange={changeHandler} />
    </div>
    <div>
        <button onClick={handleClick} >submit</button>
    </div>
    </>

  )
}

export default LoginFormFunc