import React from 'react'
import "./headersearch.scss";

export default function HeaderSearch(props) {
  return (
    <div className='out-line' onClick={() => props.setOpenSearch(false)}>
        <div className='h-search' onClick={e => e.stopPropagation()}>
            <div className='h-search-item'>
                <input placeholder='Ինչ եք փնտրում ?' />
                <button>search</button>
            </div>
        </div>
    </div>
  )
}
