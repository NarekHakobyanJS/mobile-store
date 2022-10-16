import React from 'react'
import CardsContainer from '../../componenets/Cards/CardsContainer'
import Categories from '../../componenets/Categories/Categories'
import CategoriesContainer from '../../componenets/Categories/CategoriesContainer'

export default function StorePage(props) {
  return (
    <div className='store-page'>
      <div className='store'>
        <CategoriesContainer />
        <CardsContainer mobileStore={props.mobileStore}/>
      </div>
    </div>
  )
}
