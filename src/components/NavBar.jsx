import React from 'react'
import CartWidget from './CartWidget'
import { Link , NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-principal">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand"><img src={`../images/elbordelogo1.png`} alt={'logo El Borde'}/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item p-2">
                <NavLink to={"/category/novedades"} className="nav-link navItems fs-3" aria-current="page">Novedades</NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to={"/category/best-sellers"} className="nav-link navItems fs-3">Best-Sellers</NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to={"/category/ficcion"} className="nav-link navItems fs-3">Ficción</NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to={"/category/no-ficcion"} className="nav-link navItems fs-3">No Ficción</NavLink>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
  )
}

export default NavBar