import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import "./Header.scss";
import { Context } from '../Context';

export default function Header() {
  const {state} = useContext(Context)
  return (
    <div className='header'>
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
              <NavLink to="/cart">Cart <span className='spanCart'>{state.cart.length}</span></NavLink>
            </li>
        </ul>
    </div>
  )
}
