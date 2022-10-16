import React from 'react';
import Card from './Card/Card';
import "./cards.scss";


export default function Cards(props) {
  let iphoneData = props.mobilePage.map(el => <Card iphone={el} 
    sendTOCart={props.sendTOCart}
    key={el.id} 
    cartPage={props.cartPage}
    fullPage={props.fullPage}
    />)
    return (
      <>
      <div className='cards'>
        {iphoneData}
      </div>
      </>
    )
}


