import Home from "./Home";
import "./react.css"
import {  Route,Routes } from "react-router-dom";
import Cart from "./redux/cart.jsx";
import Navbar from './navbar.jsx';

function App() {

  return (
    <>
    <div className="main">
    <Navbar />
      <Routes >

<Route path="/" element={<Home />}/>
<Route path="/cart" element={<Cart />}/>

      </Routes >
    </div>
    </>
  )
}

export default App
