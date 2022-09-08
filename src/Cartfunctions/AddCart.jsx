// import { InsertLinkTwoTone } from '@mui/icons-material';
import React, {useContext} from 'react'
import Dish from '../Components/Dish/index'
import { Context } from '../Context';


export default function AddCart(props) {
    const {state} = useContext(Context)
    const newData1 = state.cart
    let count =props.count
    
  
    let totalPrice =newData1.reduce((sumPrice, item) =>{
      return sumPrice + parseInt(item.price) * item.count;}, 0)  
  return (
    <>
    <div style={{display:"flex", justifyContent:"space-around", height:20, marginBottom:50, marginTop:50, alignItems:"center"}}>

        <h2>Total Price : {totalPrice} $</h2>

        <button>Clear cart</button>
    </div>
    <div style={{display:"flex", gap:30, marginLeft:20}}>

    {newData1.map((el) => {
        return(
        <Dish el={el} canDelete/>
        )
    }
    )}
    </div>
    </>
    )
}