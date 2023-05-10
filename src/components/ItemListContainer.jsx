import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='bg-secundario text-center p-3'>
      <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer