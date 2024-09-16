import React,{useState} from 'react'
import './react.css';
import { useDispatch } from 'react-redux';
import { additem } from './redux/slice/cartslice';


const Products = (props) => {
  const dispatch=useDispatch();

  const obj={name:props.name,price:props.price,id:props.id}
  const addcart=(e)=>{
    const dis=dispatch(additem(obj))
    console.log("adding item...")
    return dis;
  }
  
    // console.log("peoducts---"  ,props)
  return (

    <div className="box" key={props.id}>
    <img src={props.image} alt={props.name}/>
    <h1>
    {props.name}
    </h1>
    <span>${props.price}</span>
    <button onClick={addcart}>Add to Cart</button>
  </div>

  )
}

export default Products