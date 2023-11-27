import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/login"}>Login</Link>
        </ul>
    </div>
  )
}

export default Navbar