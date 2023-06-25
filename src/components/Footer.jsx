import React from 'react'
import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import tiktok from './images/tiktok.svg'
import youtube from './images/youtube.svg'


const Footer = () => {
  return (
    <div className='container-fluid'>
        <div className='row bg-secundario m-3'>
            <div className='col col-md-6 p-2'>
                <a href='https://www.facebook.com' target={"_blank"} rel="noreferrer" ><img className='m-2' src={facebook} alt="facebook"/></a>
                <a href='https://www.instagram.com' target={"_blank"} rel="noreferrer"><img className='m-2' src={instagram} alt="instagram"/></a>
                <a href='https://www.tiktok.com' target={"_blank"} rel="noreferrer"><img className='m-2' src={tiktok} alt="tiktok"/></a>
                <a href='https://wwww.youtube.com' target={"_blank"} rel="noreferrer"><img className='m-2' src={youtube} alt="youtube"/></a>
            </div>
            <div className='col col-md-6 text-end p-2'>
                <p>Copyright©El Borde Libros - Todos los derechos reservados</p>
            </div>
        </div>
    </div>
  )
}

export default Footer