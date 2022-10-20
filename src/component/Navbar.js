import React, { useContext } from 'react'
// import './nav.css'
import { Link, NavLink } from 'react-router-dom'
import { countContext } from '../config/countContext';
import {useSelector}from 'react-redux'

function Navbar() {
  var x = localStorage.getItem("token");

  const{count,setCount}=useContext(countContext);
  const counter=useSelector(state=>state.counterReducer.count);

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
              <NavLink to="/profile" className="nav-link active" aria-current="page" href="#">Profile</NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink to="/count" className="nav-link active" aria-current="page" href="#">Count</NavLink>
            </li>
            <li className="nav-item px-3">
              {!x&& <NavLink to="/login" className="nav-link active" aria-current="page" href="#">Login</NavLink>}
            </li>
            <li className="nav-item px-3">
              <span style={{color:"black",fontSize:30}}>{counter}</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar