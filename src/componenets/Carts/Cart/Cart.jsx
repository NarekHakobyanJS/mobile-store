import React from 'react';
import "./cart.scss";
import {IoTrashOutline} from "react-icons/io5"

export default function Cart(props) {
  
  const onDelete = (id) => {
    props.deleteCart(id)
  }
  let summa = 0;
  props.cartPage.forEach(el => summa += Number.parseFloat(el.price))
    
  return (
    <div className='cart'>
      <div className='cart-item'>
        <h1>Զամբյուղ</h1>
        {props.cartPage.length === 0 ? <h2 className='cart-empty'>Զամբյուղը դատարկ է</h2> : props.cartPage.map(cart => <div className='my-cart'>
          <img src={cart.imgUrl}/>
          <div className='my-cart-desc'>
            <p>{cart.name}</p>
            <b>{cart.price}</b>
          </div>
          <IoTrashOutline className='cart-del' onClick={() => onDelete(cart.id)}/>
        </div>)}
        <h5 className='summa'> { summa === 0 ? null : `ընդանուր գումարը կազմեց :${summa} դրամ` }</h5>
      </div>
    </div>
  )
}
