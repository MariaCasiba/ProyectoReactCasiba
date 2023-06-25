import React from 'react'
import ItemCount from './ItemCount'
import { CartContext } from './context/CartContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext)
    const [item, setItem] = useState({});

    const onAdd = (quantity) => {
      addItem(item, quantity)
    } 

    useEffect(() => {
      setItem(producto);
    }, [producto]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3 offset-md-3 p-3 '>
          <img src={item.picture} alt={item.titulo} className="img-fluid mt-5" />
        </div>
        <div className='col-md-4 p-4'>
          <h1>{item.titulo}</h1>
          <h3>{item.autor}</h3>
          <p className='text-start'>{item.descripcion}</p>
          <h3 className='text-center'>${item.precio}</h3>
          <ItemCount inicio={1} stock={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail