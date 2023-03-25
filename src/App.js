import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import { Component, useState } from 'react';
import List from './components/List';
import Title from './components/Title';
import LoginForm from './components/LoginForm';
import InputRef from './components/InputRef';
import FocusInput from './components/FocusInput';
import UserList from './components/UserList';
import Hoc from './components/Hoc';
import RenderPropsComponents from './components/RenderPropsComponents';
import ComponentA from './components/ComponentA';
import { UserProvider } from './components/UserContext';
import Users from './components/Users';
import Post from './components/Post';
import CounterHook from './components/CounterHook';
import LoginFormFunc from './components/LoginFormFunc';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import Postdetails from './components/Postdetails';



function App() {
  // const [currentpage, setCurrentPage] = useState("Home")
  // const [button, setButton] = useState("About")

  // const handleChange =()=>{
  //   if(currentpage==="Home"){
  //  setCurrentPage("About")
  //  setButton("Home")
  //   }
  //   else{
  //     setCurrentPage("Home")
  //     setButton("About")
  //   }
  // }

  

  return (
    <>    <div>
    {/* {currentpage==='Home'?<Home/>:<About/>}
    <button onClick={handleChange}>Go to {button} page</button> */}
    {/* <List/> */}
    {/* <LoginForm/> */}
    {/* <InputRef/> */}
{/* <FocusInput/> */}
{/* <Home/> */}

{/* <RenderPropsComponents render={()=>{
  return(<h3>I am coming from render props</h3>)}}/> */}

 {/* <UserProvider value='hit' > */}
  {/* <ComponentA/> */}
  {/* </UserProvider> */}

  {/* <Users/> */}
  {/* <Post/> */}

  {/* <CounterHook/> */}

  {/* <LoginFormFunc/> */}

{/* <Users/> */}
{/* <MouseContainer/> */}
{/* <HookMouse/> */}
<Postdetails/>
    </div>
    </>

    
    

  );
}

export default App;
