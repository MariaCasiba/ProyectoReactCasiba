import React, { useState } from 'react'

const ItemCount = ({stock, inicio, onAdd}) => {

    const [cantidad, setCantidad] = useState(inicio)

    const sumarItems = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const restarItems = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    

  return (
    <div className='text-center p-2'>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button className="btn btn-outline-dark" type="button" onClick={restarItems}>-</button>
            <button className="btn btn-outline-dark" type="button">{cantidad}</button>
           
            <button className="btn btn-outline-dark" type="button" onClick={sumarItems}>+</button>
        </div>
        <div>
            <button className='btn btn-dark m-1' type='button' onClick={() => onAdd(cantidad)}>
                Agregar 
            </button>
        </div>

    </div>
  )
}

export default ItemCount