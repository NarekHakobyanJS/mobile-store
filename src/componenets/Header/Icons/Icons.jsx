import React, { useState } from 'react';
import "./icons.scss";
import {IoCartSharp, IoPersonOutline, IoHeartOutline, IoSearchSharp } from "react-icons/io5";
import HeaderSearch from '../../Search/HeaderSearch';
import Carts from '../../Carts/Carts';
import CartsContainer from '../../Carts/CartsContainer';

export default function Icons() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const openSerchPopup = () => {
    setOpenSearch(true)
  }
  const openCartPopup = () => {
    setOpenCart(true)
  }
  
  return (
    <div className='icons'>
        <IoCartSharp onClick={openCartPopup}/>
        <IoSearchSharp onClick={openSerchPopup}/>
        <IoHeartOutline/>
        <IoPersonOutline />
        {openSearch ? <HeaderSearch setOpenSearch={setOpenSearch}/> : null}
        {openCart ? <CartsContainer setOpenCart={setOpenCart}/> : null}
    </div>
  )
}
