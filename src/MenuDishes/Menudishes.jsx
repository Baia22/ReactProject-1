import React from 'react'
import data from "../data.json"
import "./Menu.scss"
import Dish from '../Components/Dish/index'


export default function Menudishes() {

  return (
    <div className='cardsWrapper'>
    {data.map((el, index)=>{
      return(
      <Dish el={el}/>
      )
    })
  }
    </div>
    )
}


