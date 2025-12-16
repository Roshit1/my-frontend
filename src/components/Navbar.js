import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// import external css
import  '../css/Navbar.css'

function Navbar() {
  let location = useLocation();
  const navigate = useNavigate();
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark " id='navbar'>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">NOTE.LY</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem('token') ? (
              <form className="d-flex" role="search">
                <Link className="btn fw-bold text text-white" to="/login" role="button">Login</Link>
                <Link className="btn fw-bold text-white" to="/signup" role="button">Signup</Link>
              </form>
            ) : (
              <button className="btn btn-danger mx-2" onClick={() => {
                localStorage.removeItem('token'); //  delete token
                navigate('/login');               //  redirect to login page
              }} >Logout</button>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
