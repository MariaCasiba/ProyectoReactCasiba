import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-principal">
      <div className="container-fluid">
        <a className="navbar-brand" href="/some/valid/uri"><img src={`../elbordelogo1.png`} alt={'logo El Borde'}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <a className="nav-link active navItems fs-3" aria-current="page" href="/some/valid/uri">Novedades</a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link navItems fs-3" href="/some/valid/uri">Best-Sellers</a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link navItems fs-3" href="/some/valid/uri">Ficción</a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link navItems fs-3" href="/some/valid/uri">No Ficción</a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar