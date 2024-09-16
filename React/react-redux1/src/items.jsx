import React from 'react'
import products from "./products.json"
import Products from './Products';
const items = () => {
  return (
    <div>
         <div className="container">
          {
            products.map((products) => {
              return (<Products key={products.id} {...products} />)
            })
          }
        </div>
    </div>
  )
}

export default items