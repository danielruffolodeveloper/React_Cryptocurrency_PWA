import React from 'react'
import logo from '../logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <Link to={`/`} className="text-decoration-none">
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded ">

<a class="navbar-brand" href="/">
  <img src={logo}width="30" height="30" class="d-inline-block align-top mr-1" alt=""/>
  CryptoPWA</a>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Features</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
</div>
</nav>
        </Link>


    )
}

export default Navbar
