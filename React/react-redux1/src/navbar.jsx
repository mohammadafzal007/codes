import React from 'react';
import "./react.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const navbar = () => {
    const items=useSelector((state)=>state.cart)
    console.log(items)
  return (
    <div className="navbar">
            <Link to="/" style={{color:'black','font-size':30,'text-decoration':'none'}}>  Ecommerce Store</Link>
            <Link to="/cart" style={{color:'black','font-size':30,'text-decoration':'none'}}>Cart:<span>{items.length}</span></Link>
    </div>
  )
}

export default navbar