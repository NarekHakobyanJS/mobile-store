import React, { useContext, useState } from 'react'
import { CartItem } from '../../components/CartItem/CartItem';
import { productContext } from '../../app/provider/provider';

export const Cart = () => {
  
  const { cart, updateCart } = useContext(productContext)
  return (
    <div>
      <ul>
        {
          cart.map((c) => {
            return < CartItem key={c.id} cart={c} updateCart={updateCart}/>
          })
        }
      </ul>
    </div>
  )
}
