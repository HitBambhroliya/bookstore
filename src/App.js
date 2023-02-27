import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import { useState } from 'react';



function App() {
  const [currentpage, setCurrentPage] = useState("Home")
  const [button, setButton] = useState("About")

  const handleChange =()=>{
    if(currentpage==="Home"){
   setCurrentPage("About")
   setButton("Home")
    }
    else{
      setCurrentPage("Home")
      setButton("About")
    }
  }

  

  return (
    <div>
    {currentpage==='Home'?<Home/>:<About/>}
    <button onClick={handleChange}>Go to {button} page</button>
    </div>

  );
}

export default App;
