import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SaludoFinal = () => {

    const {orderId} = useParams();
  return (
    <div className='container'>
        <div className='row'>
            <div className='col text-center m-3 p-2'>
                <div className='alert alert-light p-3' role="alert">
                    <h3 className='m-2'>¡Gracias por tu compra!</h3>
                    <h5 className='m-2'>El número de pedido es: {orderId}</h5>
                    <p className='m-4'><Link to={"/"} className="btn btn-dark">Volver al Inicio</Link></p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SaludoFinal