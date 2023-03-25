import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Postdetails() {

    const [id, setId]=useState(1);
    const [idFromButton, setidFromButton] = useState(1)
    const [post,setPost]=useState({})

    useEffect( ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            setPost(res.data)  
        })
        .catch(error=>{
            console.log(error)
        })

        
    },[idFromButton] )

    function handleClick(){
      setidFromButton(id)
    }

    const handleChange=(e)=>{
        setId(e.target.value)
    }


  return (
    <div>
    
    <input type="text" onChange={handleChange} value={id} name="input"/>
    <button onClick={handleClick}>fetch</button>
    <div>
     {post.title}
     </div>
    </div>
  )
}

export default Postdetails