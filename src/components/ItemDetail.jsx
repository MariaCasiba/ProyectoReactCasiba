import React from 'react'
import ItemCount from './ItemCount'



const ItemDetail = ({producto}) => {
    

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3 offset-md-3 p-3'>
          <img src={producto.picture} alt={producto.titulo} className="img-fluid mt-5" />
        </div>
        <div className='col-md-4 p-4 '>
          <h1>{producto.titulo}</h1>
          <h3>{producto.autor}</h3>
          <p className='text-start'>{producto.descripcion}</p>
          <h3 className='text-center'>$ {producto.precio}</h3>
          <ItemCount inicio={1} stock={producto.stock} onAdd={(cantidad) => console.log('Cantidad agregada: ', cantidad)} />
        </div>
      </div>

    </div>
  )
}

export default ItemDetail