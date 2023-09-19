import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
        <div>
            <Link className='link' to={"/"}>Home</Link>
            <Link className='link' to={'/about'}>About</Link>
            <Link className='link' to={""}>Details</Link>
            <Link className='link' to={""}>Contact</Link>   
        </div>
    </div>
  )
}

export default Navbar
