import React from 'react'
import cart from './images/cart2.svg'

const CartWidget = () => {
  return (
    <div className='bg-terciario rounded'>
      <img src={cart} alt={'cart'} className="pb-2 m-2" />
      <span className='fs-4 m-2'>4</span>

    </div>
  )
}

export default CartWidget