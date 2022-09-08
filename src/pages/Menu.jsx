import React from 'react'
import data from "../data.json"
import Menudishes from '../MenuDishes/Menudishes'
import Select from '../MenuDishes/Select'


export default function Menu() {
console.log(data)
  return (
    <div style={{display:"inline-flex", flexDirection:"column"}}>
      <Select />
      <Menudishes />
    </div>
  )
}
