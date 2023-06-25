import React from 'react'

const Cartel = () => {
  return (
    <div className='container-fluid bg-dark'>
        <div className='row'>
            <div className='col'>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h6 className='text-light text-center p-2'>3 y 6 cuotas sin interés</h6>
                        </div>
                        <div className="carousel-item">
                            <h6 className='text-light text-center p-2'>Envíos gratis a todo el país</h6>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cartel