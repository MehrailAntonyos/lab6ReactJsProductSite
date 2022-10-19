import React from 'react'
// import './nav.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  var x = localStorage.getItem("token");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
            <li className="nav-item px-3">
              <NavLink to="/home" className="nav-link active" aria-current="page" href="#">Home</NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink to="/product" className="nav-link active" aria-current="page" href="#">Products</NavLink>
            </li>
            <li className="nav-item px-3">
              {!x && <NavLink to="/login" className="nav-link active" aria-current="page" href="#">Login</NavLink>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    //   <ul>
    //   <li><NavLink to="/home">Home</NavLink></li>
    //  {!x&& <li><NavLink to="/login">Login</NavLink></li>}
    //   <li><NavLink to="/Moive">Moive</NavLink></li>
    // </ul>
  )
}

export default Navbar