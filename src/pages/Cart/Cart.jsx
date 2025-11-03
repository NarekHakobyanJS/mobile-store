import React from 'react'

export const Cart = ({cart}) => {
  return (
    <div>
      {
        cart.map((c) => <h1>{c.title}</h1>)
      }
    </div>
  )
}
