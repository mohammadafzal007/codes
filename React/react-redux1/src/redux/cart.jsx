import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeitem } from './slice/cartslice.js';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Selects the cart state from the Redux store

  return (
    <div className="cartbox">
      {/* Check if there are any items in the cart */}
      {items.length > 0 ? (
        items.map((item) => (
          <div className="itembox" key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
            <img src={item.image} alt={item.name} />
            <h1>{item.id}</h1>
            <button onClick={() => dispatch(removeitem({id:item.id}))}>Remove item</button>
          </div>
        ))
      ) : (
        <h1>No Items available</h1> // Show this message when the cart is empty
      )}
    </div>
  );
};

export default Cart;
