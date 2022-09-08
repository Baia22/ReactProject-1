import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data.json"
import "./Pages.scss"

export default function Details() {
    let { id } = useParams();
    const food = data.find(obj => {
        return obj.id === +id;
      })
    
  return (
    <div className="detailsCss">
        <div className='photoCss'>
            <img src={food.image} alt=""/>
        </div>


        <div  className="description"> 
            <h3>{food.name}</h3>
            <p>category : {food.category}</p>
            <p>Description : {food.description}</p>
            <p>price : {food.price}$</p>
        </div>
    </div>
  )
}
