import React from 'react'
import cart from './images/cart2.svg'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
 
  const {cartTotalProductos} =  useContext(CartContext);

  return (
    (cartTotalProductos() > 0) ? <Link className='bg-terciario rounded text-decoration-none link-dark' to={"/cart"}>
        <img src={cart} alt={'cart'} className="pb-2 m-2" />
        <span className='fs-4 m-2 '>{cartTotalProductos()}</span>
    </Link> : ""
  )
}

export default CartWidget