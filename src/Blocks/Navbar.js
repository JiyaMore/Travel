import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" >vpscorelim.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/about' >About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/services" >Services</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/contact" >Contact Us</Link>
    </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
