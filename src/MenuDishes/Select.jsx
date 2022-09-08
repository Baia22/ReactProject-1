import React from 'react'
import "./Menu.scss"

export default function Select() {
  return (
    <select id="Menu" className='menu'>
        <option value="All">All</option>
        <option value="Main Dish">Main Dish</option>
        <option value="Side Dish">Side Dish</option>
        <option value="Drinks">Drinks</option>
        <option value="Dessert">Dessert</option>
    </select>  
    )
}
