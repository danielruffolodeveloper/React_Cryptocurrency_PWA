import React from 'react'
import logo from '../logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light  ">
      <a className="navbar-brand" href="#" style={{color:"black", fontWeight:"bold"}}>
        <img src={logo}  width="40" className="d-inline-block align-top mr-2 " alt="" loading="lazy"/>
        Crypto PWA
      </a>
    </nav>
    )
}

export default Navbar
