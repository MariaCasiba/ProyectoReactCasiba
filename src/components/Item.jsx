import React from 'react'
import { Link } from 'react-router-dom'

const item = ({item}) => {
  

  return (
    <div className='col-md-3'>

        <div className='card-group m-2 p-3'>
        <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
          <div className="card h-100 m-2 p-2">
              <img src={item.picture} className="card-img-top" alt={item.titulo}/>
              <div className="card-body">
                <h5 className="card-title text-center">{item.titulo}</h5>
                <p className="card-text text-center"><b>{item.autor}</b></p>
                <p className="card-text text-center">$ {item.precio}</p>
              <div className="card-footer">
                <small className="text-muted">ver detalle</small>
              </div>
              </div>
          </div>
        </Link>
        </div>
    </div>
    
  )
}

export default item