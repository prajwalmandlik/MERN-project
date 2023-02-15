import React from 'react'
import "./header.scss"
import Img from "../../assets/logo.png"

const Header = () => {
  return (
    <header id='header' >
        <div className="headerLogo">
            <img src={Img} alt="" />
        </div>

        <nav className='navbar'>
            <ul>
                <li><input type="search" name="search" id="" /></li>
                <li><button>Sing Up</button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
