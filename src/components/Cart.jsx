import React from 'react'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'

import trash from "./images/trash3.svg"

const Cart = () => {
  
  const {cart, removeItem, clear, cartTotalProductos, sumaTotalProductos} = useContext(CartContext) 

  if(cartTotalProductos() === 0) {
      return (
        <div className='container m-5'>
          <div className='row'>
            <div className="col alert bg-terciario m-4" role="alert">
              <h4 className='text-center '>No hay productos en el carrito de compras</h4>
              <Link to={"/"} className="btn btn-dark m-3 d-grid gap-2 col-6 mx-auto">seguir comprando</Link>
            </div>
          </div>
        </div>
      )
  }

  return (
    <div className='container m-4 p-3'>
      <div className='row m-3'>
        <div className='col'>
          <h3 className='fw-bold'>RESUMEN DE COMPRA</h3>
        </div>
        <div className='text-end'>
          <button className='btn btn-outline-dark fw-bold' onClick={() => {clear()}} title="Vaciar carrito">Vaciar Carrito</button>
        </div>
      </div>
      <div className='row'>
        <div className='col m-3 p-3  table-responsive '>
          <table className="table bg-terciario table-borderless align-middle">
            <thead>
              <tr className='text-center fs-5'>
                <th scope="col">Producto</th>
                <th scope="col">Título</th>
                <th scope="col">Autor</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Subtotal</th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map(item => (
                  
                  <tr className='text-center' key={item.id}>
                    <td><img src={item.picture} alt={item.titulo} width={80}/></td>
                    <td>{item.titulo}</td>
                    <td>{item.autor}</td>
                    <td>{item.quantity}</td>
                    <td>${item.precio}</td>
                    <td>${item.precio * item.quantity}</td>
                    <td><button className='btn btn-light' onClick={() => {removeItem(item.id)}}><img src={trash} alt="eliminar" width={16}/></button></td>
                  </tr>
                ))
              }
              <tr className='table-light fw-bold'>
                <td colSpan={5}>TOTAL A PAGAR:</td>
                <td>${sumaTotalProductos()}</td>
                <td><Link to={"/checkout"} className="btn btn-dark">Finalizar compra</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart