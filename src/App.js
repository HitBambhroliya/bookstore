import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import { useState } from 'react';



function App() {
  const [currentpage, setCurrentPage] = useState("Home")

  const handleChange =()=>{
    if(currentpage==="Home"){
   setCurrentPage("About")
    }
    else{
      setCurrentPage("Home")
    }
  }

  return (
    <div>
    {currentpage==='Home'?<Home/>:<About/>}
    <button onClick={handleChange}>Change the page</button>
    </div>

  );
}

export default App;
