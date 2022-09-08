import React from 'react'
import "./Footer.scss"
import { NavLink } from 'react-router-dom'


export default function Footer() {
  return (
    <div className='wholefooter'>
      <div className='footer'>
        <h3>Pages:</h3>
        <ul className='navigation'>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
          </ul>
      </div>
      <div className='footer1'>
        <h3 className='border'> Privacy Police</h3>
        <h3> Terms of Use</h3>
      </div>
      <div className='footer2'>
        <h2 className='border'>VBN</h2>
        <h3 style={{fontSize:"10px"}}>This website was designed with VBN</h3>
        <h5>© 2022</h5>
      </div>
    </div>
    )
}
