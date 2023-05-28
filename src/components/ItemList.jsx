import React from 'react'
import Item from  './Item'



const ItemList = ({items}) => {
  
  return (
    <div className='row bg-terciario pt-3'>
        {items.map(item => <Item item={item} key={item.id}/> )}
    </div>
  )
}

export default ItemList