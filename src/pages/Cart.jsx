import React, {useContext} from 'react'
import { Context } from '../Context';
import AddCart from "../Cartfunctions/AddCart"
import Ifnothing from '../Cartfunctions/Ifnothing';

export default function Cart() {
  const {state} = useContext(Context)

  return (
    <>
    {state.cart.length === 0 ? <Ifnothing /> : <AddCart /> }
      
    </>
  ) 
}
