import React, { useState } from "react";
import "./card.scss";
import {useTranslation} from "react-i18next"
import { IoHeartOutline, IoAddCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";


export default function Card({iphone, cartPage, sendTOCart, fullPage}) {
 
  const {t} = useTranslation()
  const addTOCart = (item) => {
    let isInArray = false
    cartPage.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    sendTOCart(item)
    
  }

  const newPageData = (item) => {
    fullPage(item)
  }
 
  return (
    <>
    <div className='card'>
        <div className='card-item'>
            <IoHeartOutline className='add-to-heart'/>
            <NavLink to="/fullItem">
            <div className='card-img' onClick={() => newPageData(iphone)}>
                <img src={iphone.imgUrl}/>
            </div>
            </NavLink>
            <div className='card-desc'>
                <h2>{iphone.name}</h2>
                <h5>{t('Description.price')} ։ <b>{iphone.price}</b></h5>
                <p>{t('Description.ram')} : <b>{iphone.ram}</b></p>
                <p>{t("Description.memory")} : <b>{iphone.memory}</b></p>
            </div>
            <div>
              <IoAddCircleOutline className='add-to-cart' onClick={() => addTOCart(iphone)}/>
            </div>
        </div>
        
    </div>
    </>
  )
}
