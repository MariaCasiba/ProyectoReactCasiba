import React from 'react'
import Cartel from './Cartel'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='container-fluid bg-principal'>
        <div className='row'>
            <div className='col'>
                <Cartel />
                <NavBar />
            </div>  
        </div>
        
    </div>
  )
}

export default Header