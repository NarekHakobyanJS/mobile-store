import React from 'react';
import Cart from './Cart/Cart';
import "./carts.scss"

export default function Carts(props) {

  return (
    <div className='carts'>
      <div className='out-line' onClick={() => props.setOpenCart(false)}>
        <div onClick={(e) => e.stopPropagation()}>
          <Cart cartPage={props.cartPage} deleteCart={props.deleteCart}/>
        </div>
      </div>
    </div>
  )
}
