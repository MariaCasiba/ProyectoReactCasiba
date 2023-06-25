import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const ItemCount = ({stock, inicio, onAdd}) => {

    const [cantidad, setCantidad] = useState(inicio)
    const [itemStock, setItemStock] = useState(stock);
    const [itemAgregado, setItemAgregado] = useState(false);

    const sumarItems = () => {
        if (cantidad < itemStock) {
            setCantidad(cantidad + 1)
        }
    }

    const restarItems = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    const addToCart = () => {
        if (cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            setCantidad(1);
            setItemAgregado(true);
            onAdd(cantidad)
        }
    }

    useEffect(() => {
        setItemStock(stock); // o itemStock, chequear si funciona
    }, [stock]); // o itemStock, chequear


  return (
    <div className='text-center p-2'>
        <div className="btn-group m-2" role="group" aria-label="Basic outlined example">
            <button className="btn btn-outline-dark" type="button" onClick={restarItems}>-</button>
            <button className="btn btn-outline-dark" type="button">{cantidad}</button>
            <button className="btn btn-outline-dark" type="button" onClick={sumarItems}>+</button>
        </div>
        <div>
            {itemAgregado ? <Link to={"/cart"} className='btn btn-dark  m-1'>Realizar compra</Link> : <button className='btn btn-light m-1' type='button' onClick={addToCart}>Agregar al carrito</button> }
        </div>

    </div>
  )
}

export default ItemCount