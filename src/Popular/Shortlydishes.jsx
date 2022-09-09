import React from 'react'
import data from "../data.json"
import Dish from '../Components/Dish'

export default function Shortlydishes() {
    const newData=data.slice(0,6)
  return (
    <div className='cardsWrapper' key={data.id}>
    {newData.map((el, index)=>{
        return(
          <Dish el={el}/>
        )
      })
    }
    </div>
  )
}
