import React, { useState } from 'react'
import './categories.scss';

export default function Categories(props) {
    const [state, setState] = useState([
        {
            key : "all",
            name : "All"
        },
        {
            key : "apple",
            name : "Apple"
        },
        {
            key : "samsung",
            name : "Samsung"
        },

    ])
  return (
    <div className='categories'>
        {state.map(el => (
            <div key={el.key} onClick={() => props.filterCategory(el.key)}>
                {el.name}
            </div>
        ))}
    </div>
  )
}
