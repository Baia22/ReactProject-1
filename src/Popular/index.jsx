import React from 'react'
import "./Popular.scss"
import { useNavigate } from 'react-router-dom'
import Shortlydishes from './Shortlydishes'


export default function Popular() {
  let navigate= useNavigate()

  return (
    <>
    <div className='popular'>
        <h2>Popular Right Now </h2>
        <button onClick={()=>{navigate("/Menu")}}>See All</button>
    </div>
    <div>
      <Shortlydishes />
    </div>
  </>
  )
}
